<?php
if (isset($_GET['price']) || isset($_GET['link'])) {
  include_once '../db.php';

  $sql = "INSERT INTO `activation` (`id`, `code`, `date`, `status`, `seller`, `pay_count`, `user_profile`) 
          VALUES (NULL, MD5(now()), CURRENT_TIMESTAMP, '1', :seller, :pay_count, :link);";
  DB_exec($sql, array(
    'seller' => $_GET['seller'],
    'pay_count' => $_GET['pay_count'],
    'link' => $_GET['link'],
  ));


  header('Location: index.php');
}

?>