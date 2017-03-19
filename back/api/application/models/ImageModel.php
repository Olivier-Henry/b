<?php

require_once __DIR__.'\AbstractModel.php';
/**
 * Description of ImageModel
 *
 * @author olivier
 */
class ImageModel extends AbstractModel {
    
    public $name;
    public $furniture_id;
    
    public function __construct() {
        parent::__construct();
        $this->table = 'furniture_pic';
    }
    
    public function getByFurnitureId($id){
        $result = $this->db->get_where($this->table, array('furniture_id' => $id), 30, 0);
        return $result->result_object();
    }
}
