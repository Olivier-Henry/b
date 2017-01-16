<?php

require_once __DIR__.'\AbstractModel.php';
/**
 * Description of FurnitureType
 *
 * @author olivier
 */
class FurnitureTypeModel extends AbstractModel {

   
  //  public $id;
    public $name;
    public $description;
    
    public function __construct() {
        parent::__construct();
        $this->table = 'furniture_type';
    }



}
