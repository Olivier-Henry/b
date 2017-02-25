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
        $this->load->model('sizemodel');
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
                $response[$i]->size = intval($response[$i]->size_id) > 0 ? $this->sizemodel->get($response[$i]->size_id) : null;
            }
        }

        echo json_encode($response);
    }

}
