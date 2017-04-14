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

        $this->UserModel->login = $this->json->login;
        $this->UserModel->password = sha1($this->json->password);
        $user = $this->UserModel->exist();
        if (is_array($user) && count($user) === 1) {
            $u = new stdClass();
            $u->iat = time();
            $u->exp = time() + 3600;
            $u->login = $user[0]->login;
            $jwt = JWT::encode($u, '');

            echo json_encode(array("code" => 0, "response" => array("token" => $jwt)));
        }else{
            echo false;
        }
    }

}
