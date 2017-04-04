<?php

require_once __DIR__.'/InterfaceModel.php';

/**
 * Description of AbstractModel
 *
 * @author olivier
 */
abstract class AbstractModel extends CI_Model implements InterfaceModel {

    public $id;
    protected $table;

    public function get($id = 0) {
        $result = false;
        if (!$id) {

            $result = $this->db->get($this->table);
        } else {
            $result = $this->db->get_where($this->table, array('id' => $id), 500, 0);
        }

        return $result->result_object();
    }

    public function insert() {
        $this->db->insert($this->table, $this);
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

    public function update() {
        $this->db->update($this->table, $this, array('id' => $this->id));
    }

    public function delete() {
        return $this->db->delete($this->table, array('id' => $this->id));
    }

}
