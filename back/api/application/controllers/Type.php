<?php

defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Description of Type
 *
 * @author olivier
 */
class Type extends CI_Controller{
    
    public function __construct() {
        parent::__construct();
        $this->json = json_decode($this->security->xss_clean($this->input->raw_input_stream));
        $this->load->model('TypeModel');
        $this->load->model('AttributeModel');
    }

    public function get($id = 0) {
        
        $types = $this->TypeModel->get(intval($id));
        
        foreach ($types as $k => $type){
            $type->attributes = $this->AttributeModel->getByType($type->id);
        }
        
        echo json_encode($types);
    }
}
