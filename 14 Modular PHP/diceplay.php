<?php

include("diceclasses.inc.php");

$faces = $_GET["faces"];
$throws = $_GET["throws"];
$p = $_GET["p"];
$material = $_GET["material"];


$results = array();

// make dice
if($material == "wood" || "stone" || "metal"){
    $dice = new PhysicalDice($faces, $bias, $material);
}
else {
    $dice = new Dice($faces, $p);
}

for ($i = 1; $i<=$throws; $i++) {
    $res = $dice->cast();
    $results[] = array('id' => strval($i), 'res' => strval($res));
}
$freqs = array();
for ($i = 1; $i<=$faces; $i++) {
    $freqs[] = array ('eyes' => strval($i), 'frequency' => strval($dice->getFreq($i)));
}
echo json_encode(array('faces'=>$faces,'results'=>$results,'frequencies'=>$freqs,'average'=>$dice->average($faces, $throws)));
echo "<br> Dice is made of " .$material;



?>