<?php
class Person  
{
  public $name;
  private $age; // 不能被继承
  protected $money;

  public function __construct($name, $age, $money) {
    $this->name = $name;
    $this->age = $age;
    $this->money = $money;
  }

  public function getUser()
  {
    echo $this -> name . "-" . $this -> age . "-" . $this -> money;
  }
}

class Yellow extends Person
{
  // 重写
  public function __construct($name, $age, $money) {
    // 重载
    parent::__construct($name, $age, $money);
  }

  public function getUser()
  {
    echo $this -> name . "-" . $this -> age . "-" . $this -> money;
    // parent::getUser();
  }
}

$p = new Yellow("张三", "22", "11");
$p -> getUser();
?>