<?php
  // error_reporting(E_ALL);
  // ini_set('display_errors', 1);
  // header('Content-Type: text/html');

  $host = 'localhost';
  $user = 'i98888jy_test';
  $pass = 'gebeto';
  $dbname = 'i98888jy_test';
  
  try {
    $DBH = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
  } 
  catch(PDOException $e) {  
      echo $e->getMessage();
      exit();
  }
  
  function DB_select($query, $data = array()) {
    global $DBH;
    $STH = $DBH->prepare($query);
    $STH->setFetchMode(PDO::FETCH_ASSOC);
    $STH->execute($data);
    $res = $STH->fetchAll();
    return $res;
  }
  
  function DB_exec($query, $data) {
    global $DBH;
    $STH = $DBH->prepare($query);
    $res = $STH->execute($data);
    return $res;
  }

?>