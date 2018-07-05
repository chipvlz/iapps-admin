<?php

include_once '../main.php';

$beforeRemove = DB_select("SELECT status from activation WHERE id=:id;", array( 'id' => $_GET['id'] ));
DB_exec("UPDATE activation SET status=1 WHERE id=:id;", array( 'id' => $_GET['id'] ));
$afterRemove = DB_select("SELECT status from activation WHERE id=:id;", array( 'id' => $_GET['id'] ));

echo json_encode(array('response' => ($beforeRemove[0]['status'] != $afterRemove[0]['status']) ));


// delete FROM `activation` WHERE id=13; SELECT * from activation where id=1;