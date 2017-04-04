<?php

require_once __DIR__.'/AbstractModel.php';
/**
 * Description of SubFurnitureType
 *
 * @author olivier
 */
class SubFurnitureTypeModel extends AbstractModel{
    
    public $label;
    
    public function __construct() {
        parent::__construct();
        $this->table = "sub_furniture_type";
    }
    
}
