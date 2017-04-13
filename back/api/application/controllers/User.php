<?php

defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Description of User
 *
 * @author olivier
 */
class User extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model("UserModel");
        $this->json = json_decode($this->security->xss_clean($this->input->raw_input_stream));
    }

    public function auth() {
        var_dump($this->json);  
        
        
        $this->UserModel->login = $this->json->login;
        $this->UserModel->password = sha1($this->json->password);
        $user = $this->UserModel->exist();
        var_dump($this->UserModel->exist($user));
        if(is_array($user) && count($user) === 1){
            
        }
        
    }

}
