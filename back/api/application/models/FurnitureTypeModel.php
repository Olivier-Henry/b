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

//    public function get($id = 0) {
//        
//        $result = false;
//        if (!$id) {
//           
//            $result = $this->db->get($this->table);
//        } else {
//            $result = $this->db->get_where($this->table, array('id' => $id), 500, 0);
//        }
//        
//        return $result->result_object();
//    }
//
//    public function save() {
//        if ($this->id < 1) {
//            $this->insert();
//            return $this->db->insert_id();
//        } else {
//            $this->update();
//            return $this->db->affected_rows();
//        }
//    }
//
//    private function insert() {
//        $this->db->insert($this->table, $this);
//    }
//
//    private function update() {
//        $this->db->update($this->table, $this, array('id' => $this->id));
//    }
//    
//    public function delete(){
//       return $this->db->delete($this->table, array('id' => $this->id));
//    }

}
