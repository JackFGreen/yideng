<?php
interface Animal {
  const KIND = "Animal";

  public function run();
  public function eat($food);
}

abstract class Person {
  const TYPE = 'people';

  public $name;
  private $card;

  public function __construct($name, $card) {
    $this->name = $name;
    $this->card = $card;
  }

  public function getCard()
  {
    echo $this -> card;
  }
  
  public abstract function read($book);
}

class Student extends Person implements Animal
{
  const LEVEL = "student";

  public $grade;
  
  public function __construct($name, $card, $grade) {
    parent::__construct($name, $card);
    $this -> grade = $grade;
  }

  public function run()
  {
    echo "{$this -> name} run";
  }
  public function eat($food)
  {
    echo "{$this -> name} eat {$food}";
  }
  public function read($book)
  {
    echo "{$this -> name} read {$book}";
  }

  public function getInfo()
  {
    $kind = self::KIND;
    $type = self::TYPE;
    $level = self::LEVEL;
    echo "{$kind} > {$type} > {$level}";
  }
}

$stu = new Student('小明', 666, '三年级');
echo $stu -> name . "-" . $stu -> grade;
echo "<br>";

// echo $stu -> card;
echo $stu -> getCard();
echo "<br>";

$stu -> getInfo();
echo "<br>";

$stu -> run();
echo "<br>";

$stu -> eat('bread');
echo "<br>";

$stu -> read('book');
echo "<br>";
?>