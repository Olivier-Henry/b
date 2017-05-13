<?php

require_once __DIR__ . '/AbstractModel.php';

/**
 * Description of AttributeModel
 *
 * @author olivier
 */
class AttributeModel extends AbstractModel {

    public $label;
    public $type_id;

    public function __construct() {
        parent::__construct();
        $this->table = 'attributes';
    }
    
    public function getByType($typeId){
        $result = $this->db->get_where($this->table, array('type_id' => $typeId), 50, 0);
         return $result->result_object();
    }
    
    public function deleteByType($typeId){
        return $this->db->delete($this->table, array('type_id' => $typeId));
    }

}
