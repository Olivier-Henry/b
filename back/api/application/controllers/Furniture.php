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
    
     

}
