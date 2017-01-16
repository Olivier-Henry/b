<?php


defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Description of SubFurnitureType
 *
 * @author olivier
 */
class SubFurnitureType extends CI_Controller{
    
     public function __construct() {
        parent::__construct();
        $this->json = json_decode($this->security->xss_clean($this->input->raw_input_stream));
        $this->load->model('subfurnituretypemodel');
    }

    public function index() {
       
    }

    public function get($id = 0) {
        echo json_encode($this->subfurnituretypemodel->get(intval($id)));
    }

    public function save() {
       
        if ($this->json) {
            
            if(!isset($this->json->id)){
                $this->json->id = 0;
            }
            
            $this->subfurnituretypemodel->id = $this->json->id;
            $this->subfurnituretypemodel->name = $this->json->name;
            $this->subfurnituretypemodel->description = $this->json->description;
            echo json_encode($this->subfurnituretypemodel->save());
        }
    }

    public function delete() {
        if ($this->json) {
            $this->subfurnituretypemodel->id = $this->json->id;
            $this->subfurnituretypemodel->name = $this->json->name;
            $this->subfurnituretypemodel->description = $this->json->description;
            echo json_encode($this->subfurnituretypemodel->delete());
        }
    }
}
