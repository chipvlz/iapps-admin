<?php

include_once '../main.php';

// print_r($_POST);

$res = DB_exec("UPDATE activation SET pay_count=:cnt, user_profile=:user_profile WHERE id=:id;", array(
    'cnt' => $_POST['cnt'],
    // 'seller' => $_POST['seller'],
    'user_profile' => $_POST['user_profile'],
    'id' => $_POST['id']
));

echo json_encode(array('response' => $res));