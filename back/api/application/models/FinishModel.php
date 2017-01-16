<?php

require_once __DIR__.'\AbstractModel.php';
/**
 * Description of FurnitureType
 *
 * @author olivier
 */
class FinishModel extends AbstractModel {

    public $label;
    
    public function __construct() {
        parent::__construct();
        $this->table = 'furniture_finish';
    }

}
