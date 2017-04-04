<?php

defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Description of FurnitureType
 *
 * @author olivier
 */
class Finish extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->json = json_decode($this->security->xss_clean($this->input->raw_input_stream));
        $this->load->model('FinishModel');
    }

    public function index() {
        //  echo 'yo';
    }

    public function get($id = 0) {
        echo json_encode($this->FinishModel->get(intval($id)));
    }

    public function save() {
       
        if ($this->json) {
            
            if(!isset($this->json->id)){
                $this->json->id = 0;
            }
            
            $this->FinishModel->id = $this->json->id;
            $this->FinishModel->label = $this->json->label;
            echo json_encode($this->FinishModel->save());
        }
    }

    public function delete() {
        if ($this->json) {
            $this->FinishModel->id = $this->json->id;
            $this->FinishModel->label = $this->json->label;
            echo json_encode($this->FinishModel->delete());
        }
    }

}
