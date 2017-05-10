<?php

defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Description of Attribute
 *
 * @author olivier
 */
class Attribute extends CI_Model {

    public function __construct() {
        parent::__construct();
        $this->json = json_decode($this->security->xss_clean($this->input->raw_input_stream));
        $this->load->model('AttributeModel');
    }


    public function get($id = 0) {
        echo json_encode($this->AttributeModel->get(intval($id)));
    }

}
