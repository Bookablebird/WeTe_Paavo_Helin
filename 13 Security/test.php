<?php
/**
 * Created by PhpStorm.
 * User: Käyttäjä
 * Date: 4.5.2019
 * Time: 15.08
 */
$string = "I'll \"walk\" the <b onmouseover=alert('test')>dog</b> now";  // notice \-sign before double quotes!

$a = htmlentities($string);
$b = html_entity_decode($string);
$c = htmlspecialchars($string);
$d = strip_tags($string, '<b>');

//echo $a.", ".$b.", ".$c.", ".$d;

echo $d;

?>