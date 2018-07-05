<?php

include_once '../db.php';


DB_exec('delete from activation where id=:id', array(
  'id' => $_GET['id']
));


header('Location: index.php');

