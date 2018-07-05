<?php

include_once '../db.php';


DB_exec('update activation set status=1 where id=:id', array(
  'id' => $_GET['id']
));


header('Location: index.php');

