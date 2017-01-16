<?php

require_once './AbstractModel.php';
/**
 * Description of SubFurnitureType
 *
 * @author olivier
 */
class SubFurnitureTypeModel extends AbstractModel{
    
    public $name;
    public $description;
    
    public function __construct() {
        parent::__construct();
        $this->table = "sub_furniture_type";
    }
    
}
