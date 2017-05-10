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
    }

    public function get($id = 0) {
        echo json_encode($this->TypeModel->get(intval($id)));
    }
}
