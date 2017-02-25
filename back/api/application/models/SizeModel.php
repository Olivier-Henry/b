<?php

require_once __DIR__ . '\AbstractModel.php';

/**
 * Description of SizeModel
 *
 * @author olivier
 */
class SizeModel extends AbstractModel {
    
    public $width;
    public $height;
    public $depth;

     public function __construct() {
        parent::__construct();
        $this->table = 'furniture_size';
    }
}
