<?php

class Dice {
    private  $faces;
    private  $freqs = array();
    private $p;


    // Constructor
    public function __construct($faces, $p) {
        $this->faces = $faces;
        $this->p = $p;
    }

    public function cast() {
        //biggest number comes if rand 1-100 is lower than bias*100
        $rand = rand(1,100);
        $bias = $this->p * 100;
        if ($rand < $bias) {
            $res = $this->faces;
            $this->freqs[$res]++;
        }
        //non bias
        elseif ($bias == 0){
            $res = rand(1,($this->faces));
            $this->freqs[$res]++;
        }
        //takes the biggest number out of the game
        else {
            $res = rand(1,($this->faces-1));
            $this->freqs[$res]++;
        }
        return $res;
    }
    
    public function getFreq($eyes) {
        $freq = $this->freqs[$eyes];
        if ($freq=="")
            $freq = 0;
        return $freq;
    }

    public function average($eyes, $throws){
        $avrg = 0;
        for($i = 1; $i<=$eyes; $i++){
            $freq = $this->getFreq($i);
            $avrg = $avrg + $freq * $i;
        }
        $avrg = $avrg/$throws;
        return $avrg;
    }
}
class PhysicalDice extends Dice {
    private $material;

    public function __construct($faces, $bias, $material) {
        $this->material = $material;
        parent::__construct($faces, $bias);
    }
}
?>