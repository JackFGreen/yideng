<?php
class Person
{
  public $age;
  public function __construct($name) {
    $this->name = $name;
  }
  public function __destruct() {
    echo "destruct_{$this -> name}";
    echo "<hr>";
  }
  public function info()
  {
    return array('name' => $this -> name, 'age' => $this -> age);
  }
}

$zhangsan = new Person('张三');
new Person('李四');
// $zhangsan -> age = 18;
// $info = $zhangsan -> info();

// echo json_encode($info);
