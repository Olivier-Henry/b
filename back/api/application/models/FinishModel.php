<?php

/**
 * Description of FurnitureType
 *
 * @author olivier
 */
class FinishModel extends CI_Model {

    private $table = 'finish';
    public $id;
    public $label;


    public function get($id = 0) {
        
        $result = false;
        if (!$id) {
           
            $result = $this->db->get($this->table);
        } else {
            $result = $this->db->get_where($this->table, array('id' => $id), 500, 0);
        }
        
        return $result->result_object();
    }

    public function save() {
        if ($this->id < 1) {
            $this->insert();
            return $this->db->insert_id();
        } else {
            $this->update();
            return $this->db->affected_rows();
        }
    }

    private function insert() {
        $this->db->insert($this->table, $this);
    }

    private function update() {
        $this->db->update($this->table, $this, array('id' => $this));
    }
    
    public function delete(){
       return $this->db->delete($this->table, array('id' => $this->id));
    }

}
