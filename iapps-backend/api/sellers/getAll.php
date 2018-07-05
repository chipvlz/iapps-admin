<?php

include_once '../main.php';

$res = DB_select("SELECT * FROM sellers", array());

echo json_encode(array('response' => $res));