<?php

include_once '../main.php';

$beforeRemove = DB_select("SELECT id from activation WHERE id=:id;", array( 'id' => $_GET['id'] ));
DB_exec("DELETE FROM activation WHERE id=:id;", array( 'id' => $_GET['id'] ));
$afterRemove = DB_select("SELECT id from activation WHERE id=:id;", array( 'id' => $_GET['id'] ));

echo json_encode(array('response' => count($beforeRemove) != count($afterRemove) ));


// delete FROM `activation` WHERE id=13; SELECT * from activation where id=1;