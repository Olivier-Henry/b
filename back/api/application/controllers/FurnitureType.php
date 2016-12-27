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
        $this->load->model('furnituretypemodel');
    }

    public function index() {
        //  echo 'yo';
    }

    public function get($id = 0) {
        return json_encode($this->furnituretypemodel->get(intval($id)));
    }

    public function save() {
       if($this->json){
           $this->furnituretypemodel->id = $this->json->id;
           $this->furnituretypemodel->name = $this->json->name;
           $this->furnituretypemodel->description = $this->json->description;
           return json_encode($this->furnituretypemodel->save());
       }
    }
    
    public function delete(){
        if($this->json){
           $this->furnituretypemodel->id = $this->json->id;
           $this->furnituretypemodel->name = $this->json->name;
           $this->furnituretypemodel->description = $this->json->description;
           return json_encode($this->furnituretypemodel->delete());
       }
    }

}
