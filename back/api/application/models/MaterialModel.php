<?php

require_once __DIR__ . '/AbstractModel.php';

/**
 * Description of MaterialModel
 *
 * @author olivier
 */
class MaterialModel extends AbstractModel {

    //put your code here

    public $label;

    public function __construct() {
        parent::__construct();
        $this->table = 'material';
    }

    private function deleteTypes() {
        return $this->db->delete('material_type', array('material_id' => $this->id));
    }

    public function getTypes($materialId) {
        $this->db->select('type_id');
        return $this->db->get_where('material_type', array('material_id' => $materialId))
            ->result_array();
    }

    public function saveTypes(array $types) {

        $this->db->trans_begin();

        $this->deleteTypes();
        $this->db->insert_batch('material_type', $types);

        if (!$this->db->trans_status()) {
            $this->db->trans_rollback();
        } else {
            $this->db->trans_commit();
        }
    }

}
