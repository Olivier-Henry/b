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
        echo json_encode($this->eventmodel->get(intval($id)));
    }

    public function save() {
        if ($this->json) {
            if (!isset($this->json->id)) {
                $this->json->id = 0;
            }

            $this->eventmodel->id = $this->json->id;
            $this->eventmodel->label = $this->json->label;
            $this->eventmodel->description = $this->json->description;
            $this->eventmodel->address = $this->json->address;
            $this->eventmodel->address_name = $this->json->address_name;
            $this->eventmodel->date_start = $this->json->date_start;
            $this->eventmodel->date_end = $this->json->date_end;
            $this->eventmodel->lat = $this->json->lat;
            $this->eventmodel->lon = $this->json->lon;

            echo json_encode($this->eventmodel->save());
        }
    }

}
