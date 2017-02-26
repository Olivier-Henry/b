<?php

defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Description of Furniture
 *
 * @author olivier
 */
class Furniture extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->json = json_decode($this->security->xss_clean($this->input->raw_input_stream));
        $this->load->model('furnituremodel');
        $this->load->model('furnituretypemodel');
        $this->load->model('finishmodel');
    }

    public function index() {
        //  echo 'yo';
    }

    public function get($id = 0) {

        $response = $this->furnituremodel->get(intval($id));

        if (is_array($response)) {
            for ($i = 0; $i < count($response); $i++) {
                $response[$i]->type = intval($response[$i]->type_id) > 0 ? $this->furnituretypemodel->get($response[$i]->type_id) : null;
                $response[$i]->finish = intval($response[$i]->finish_id) > 0 ? $this->finishmodel->get($response[$i]->finish_id) : null;
            }
        }

        echo json_encode($response);
    }
    
     public function save() {
       
        if ($this->json) {
            
            if(!isset($this->json->id)){
                $this->json->id = 0;
            }
            
            $this->furnituremodel->id = $this->json->id;
            $this->furnituremodel->label = $this->json->label;
            $this->furnituremodel->type_id = $this->json->type->id;
            $this->furnituremodel->finish_id = $this->json->finish->id;
            $this->furnituremodel->published = isset($this->json->published) ? $this->json->published : 0;
            $this->furnituremodel->price = $this->json->price;
            $this->furnituremodel->stock = $this->json->stock;
            $this->furnituremodel->delay = $this->json->delay;
            $this->furnituremodel->width = $this->json->width;
            $this->furnituremodel->height = $this->json->height;
            $this->furnituremodel->depth = $this->json->depth;
            $this->furnituremodel->description = $this->json->description;
            
            
            echo json_encode($this->furnituremodel->save());
        }
    }

}
