<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>test php</title>
  <script src="http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
</head>
<body>
  <?php
    require_once('./global.php');

    echo 'hello php ';

    $a = 'test ';
    if (true) {
      echo $a;
    }

    $b = 'out ';
    function test() {
      global $b;
      echo $b;

      echo $GLOBALS['g'];
    }
    test();
  ?>

  <?php
    $arrayTest = array('0' => 'red', '1' => 'blue');
    echo json_encode($arrayTest);
  ?>

  <?php
    echo $_SESSION['name'];
  ?>

  <form action="auth.php" method="post">
    <p>
      <label for="username">用户名</label>
      <input type="text" name="username" id="username">
    </p>
    <p>
      <label for="password">密码</label>
      <input type="text" name="password" id="password">
    </p>
    <button class="btn">提交</button>
  </form>

  <script>
    $('.btn').click(function (e){
      e.preventDefault();

      $.ajax({
        url: 'auth.php',
        type: 'post',
        data: {
          username: $('#username').val()
        }
      })
    })
  </script>
</body>
</html>