<?php
class Person
{
  public $name = "Jack";
  private $age = 25;
  protected $money = 10;

  private function getAge()
  {
    return $this -> age;
  }

  protected function getMoney()
  {
    return $this -> money;
  }

  public function getUser()
  {
    return array('name' => $this -> name, 'age' => $this -> age, 'money' => $this -> money);
  }

  public function __set($key, $value)
  {
    if ($key == "age") {
      $old = $this -> age;
      $this -> age = $value;
      echo "private age {$old} -> {$value}";
    }
  }

  public function __get($key)
  {
    if ($key == "age") {
      echo "age is private";
    }
  }

  public function __isset($key)
  {
    if ($key == "money") {
      return false;
    }
  }

  public function __unset($key)
  {
    if ($key == "age") {
      unset($this -> age);
    }
  }
}

$p = new Person();
$user = $p -> getUser();
echo json_encode($user);

$p -> age = 11;
echo $p -> age;

var_dump(isset($p -> name));
var_dump(isset($p -> money));

unset($p -> name);
echo $p -> name;

unset($p -> age);
// var_dump(isset($p -> age));
?>