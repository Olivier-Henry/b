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
        $this->load->model('FurnitureModel');
        $this->load->model('FurnitureTypeModel');
        $this->load->model('FinishModel');
        $this->load->model('ImageModel');
    }

    public function index() {
        //  echo 'yo';
    }

    public function get($id = 0) {

        $response = $this->FurnitureModel->get(intval($id));

        if (is_array($response)) {
            for ($i = 0; $i < count($response); $i++) {
                $response[$i]->type = intval($response[$i]->type_id) > 0 ? $this->FurnitureTypeModel->get($response[$i]->type_id) : null;
                $response[$i]->finish = intval($response[$i]->finish_id) > 0 ? $this->FinishModel->get($response[$i]->finish_id) : null;
                $response[$i]->pictures = $this->ImageModel->getByFurnitureId($response[$i]->id);
            }
        }

        echo json_encode($response);
    }
    
     public function save() {
       
        if ($this->json) {
            
            if(!isset($this->json->id)){
                $this->json->id = 0;
            }
            
            $this->FurnitureModel->id = $this->json->id;
            $this->FurnitureModel->label = $this->json->label;
            $this->FurnitureModel->type_id = $this->json->type->id;
            $this->FurnitureModel->finish_id = $this->json->finish->id;
            $this->FurnitureModel->published = isset($this->json->published) ? $this->json->published : 0;
            $this->FurnitureModel->price = $this->json->price;
            $this->FurnitureModel->stock = $this->json->stock;
            $this->FurnitureModel->delay = $this->json->delay;
            $this->FurnitureModel->width = $this->json->width;
            $this->FurnitureModel->height = $this->json->height;
            $this->FurnitureModel->depth = $this->json->depth;
            $this->FurnitureModel->description = $this->json->description;
            
            
            echo json_encode($this->FurnitureModel->save());
        }
    }

}
