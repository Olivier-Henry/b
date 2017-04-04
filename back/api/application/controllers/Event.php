<?php

defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Description of Event
 *
 * @author olivier
 */
class Event extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->json = json_decode($this->security->xss_clean($this->input->raw_input_stream));
        $this->load->model('EventModel');
    }

    public function get($id = 0) {
        echo json_encode($this->EventModel->get(intval($id)));
    }

    public function save() {
        if ($this->json) {
            if (!isset($this->json->id)) {
                $this->json->id = 0;
            }

            $this->EventModel->id = $this->json->id;
            $this->EventModel->label = $this->json->label;
            $this->EventModel->description = $this->json->description;
            $this->EventModel->address = $this->json->address;
            $this->EventModel->address_name = $this->json->address_name;
            $this->EventModel->date_start = $this->json->date_start;
            $this->EventModel->date_end = $this->json->date_end;
            $this->EventModel->lat = $this->json->lat;
            $this->EventModel->lon = $this->json->lon;

            echo json_encode($this->EventModel->save());
        }
    }

}
