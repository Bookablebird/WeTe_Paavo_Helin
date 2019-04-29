<?php
/**
 * Created by PhpStorm.
 * User: Käyttäjä
 * Date: 29.4.2019
 * Time: 10.33
 */
$cars = array("Volvo", "BMW", "Toyota", "Ferrari", "Audi");
for ($i = 0 ; $i < count($cars) ; $i++){
    echo nl2br("$i = $cars[$i]\n");
}
$r = 7.0;
$pi = 3.14;
$area = $pi * pow($r,2);
echo "Area = $area, when r = $r";

?>