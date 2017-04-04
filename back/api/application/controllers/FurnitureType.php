<?php

defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Description of FurnitureType
 *
 * @author olivier
 */
class FurnitureType extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->json = json_decode($this->security->xss_clean($this->input->raw_input_stream));
        $this->load->model('FurnitureTypeModel');
    }

    public function index() {
        //  echo 'yo';
    }

    public function get($id = 0) {
        echo json_encode($this->FurnitureTypeModel->get(intval($id)));
    }

    public function save() {
       
        if ($this->json) {
            
            if(!isset($this->json->id)){
                $this->json->id = 0;
            }
            
            $this->FurnitureTypeModel->id = $this->json->id;
            $this->FurnitureTypeModel->label = $this->json->label;
            echo json_encode($this->FurnitureTypeModel->save());
        }
    }

    public function delete() {
        if ($this->json) {
            $this->FurnitureTypeModel->id = $this->json->id;
            $this->FurnitureTypeModel->name = $this->json->name;
            $this->FurnitureTypeModel->description = $this->json->description;
            echo json_encode($this->FurnitureTypeModel->delete());
        }
    }

}
