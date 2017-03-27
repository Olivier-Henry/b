<?php

defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Description of Event
 *
 * @author olivier
 */
class Event extends CI_Controller{
    
    public function __construct() {
        parent::__construct();
        $this->json = json_decode($this->security->xss_clean($this->input->raw_input_stream));
        $this->load->model('eventmodel');
    }
}
