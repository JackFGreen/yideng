<?php
header('Content-Type: application/json;charset=utf-8');

$news_title = $_REQUEST['news_title'];
$news_content = $_REQUEST['news_content'];
$news_img = $_REQUEST['news_img'];
$news_date = $_REQUEST['news_date'];


$con = mysqli_connect('localhost', 'root', '');

if (!$con) {
  die('Could not connect: ' . mysql_error());
}
// // echo 'connect mysql success';

mysqli_select_db($con, 'news_boss');

mysqli_query($con, "set names 'utf8'");

$result = mysqli_query($con, 'INSERT INTO news (news_title, news_content, news_img, news_date)
VALUES("'.$news_title.'", "'.$news_content.'", "'.$news_img.'", "'.$news_date.'")');

if (!$result) {
  die('Error: ' . mysql_error());
} else {
  echo 'success';
}
// $news = mysqli_query($con, 'SELECT * FROM news WHERE news_id="10"');
// $row = mysqli_fetch_array($news);

// // echo '新闻';
// echo json_encode(array('news_title' => $row['news_title']));
// ?>
