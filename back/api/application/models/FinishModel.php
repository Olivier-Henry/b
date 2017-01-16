<?php

/**
 * Description of FurnitureType
 *
 * @author olivier
 */
class FinishModel extends CI_Model {

    public $label;
    
    public function __construct() {
        parent::__construct();
        $this->table = 'finish';
    }

}
