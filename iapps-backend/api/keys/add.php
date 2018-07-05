<?php

include_once '../main.php';

// print_r($_POST);

$sql = "INSERT INTO `activation` (`id`, `code`, `date`, `status`, `seller`, `pay_count`, `user_profile`) 
          VALUES (NULL, MD5(now()), CURRENT_TIMESTAMP, '1', :seller, :pay_count, :link);";
DB_exec($sql, array(
  'seller' => $_POST['seller'],
  'pay_count' => $_POST['pay_count'],
  'link' => $_POST['link'],
));

// $res = DB_select('SELECT * FROM activation WHERE id=LAST_INSERT_ID();');

$res = DB_select("SELECT
        act.id,
        act.code,
        act.date,
        act.status,
        s.name as seller,
        act.pay_count,
        act.user_profile,
        COUNT(d.id) AS cnt,
        GROUP_CONCAT('\n', d.device_type, ': ', d.device_name SEPARATOR ' - ') as devices
    FROM activation act
        LEFT JOIN devices d ON act.code=d.code
        LEFT JOIN sellers s ON act.seller=s.id
    WHERE act.id=LAST_INSERT_ID()
    GROUP BY act.code
    ");
if (count($res) > 0) {
  echo json_encode(array('response' => $res[0]));
} else {
  echo json_encode(array('response' => false));
}