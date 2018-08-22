<?php
header('Content-Type: application/json;charset=utf-8');

$username = $_POST['username'];
// $password = $_POST['password'];

if ($username === 'admin') {
  // echo '登录成功';
  echo json_encode(array('message' => '登录成功', 'code' => 0));
} else {
  echo '登录失败';
}
?>