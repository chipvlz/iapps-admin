<?php
include_once 'db.php';

$headers = getallheaders();

$myfile = fopen("log.txt", "w") or die("Unable to open file!");
$txt = json_encode($headers);
fwrite($myfile, $txt);
fclose($myfile);


$res = DB_select('select `id` from `activation` where `code`=:code and `status`=1', array(
  'code' => $headers['ACTIVATION-KEY']
));


if (count($res) == 0) {
  // print_r($res);  
  http_response_code(404);
}

$delta = $headers['DEVICE-ID'] . $headers['ACTIVATION-KEY'];
DB_exec('INSERT INTO `devices` (`device_os`, `device_type`, `device_name`, `device_id`, `code`, `delta`) VALUES (:device_os_version, :device_type, :device_name, MD5(:device_id), :code, MD5(:delta)) ON DUPLICATE KEY UPDATE lastdate=CURRENT_TIMESTAMP;', array(
  'device_os_version' => $headers['DEVICE-OS-VERSION'],
  'device_id' => $headers['DEVICE-ID'],
  'device_type' => $headers['DEVICE-TYPE'],
  'device_name' => $headers['DEVICE-NAME'],
  'code' => $headers['ACTIVATION-KEY'],
  'delta' => $delta
));

