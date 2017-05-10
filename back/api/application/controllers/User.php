<?php

defined('BASEPATH') OR exit('No direct script access allowed');
//header("Access-Control-Allow-Origin: http://localhost:3000");
//header("Access-Control-Allow-Headers: X-Requested-With");
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

        $this->UserModel->email = $this->json->email;
        $this->UserModel->password = sha1($this->json->password);
        $user = $this->UserModel->exist();
        if (is_array($user) && count($user) === 1) {
            $u = new stdClass();
            $u->iat = time();
            $u->exp = time() + EXP;
            $u->id = $user[0]->id;
            $u->email = $user[0]->email;
            $jwt = JWT::encode($u, SECRET_KEY);

            echo json_encode(array("code" => 0, "response" => array("token" => $jwt)));
        }else{
            echo false;
        }
    }
    
    public function saveImage($id = 0){
        $json = array();

        if ($id === 0) {
            return false;
        }

        if (!is_dir('../../images/user/' . $id)) {
            mkdir('../../images/user/' . $id, 0777, true);
        }

        $config['upload_path'] = '../../images/user/' . $id;
        $config['allowed_types'] = 'gif|jpg|png';
        $config['encrypt_name'] = TRUE;

        $this->load->library('upload', $config);

        $this->upload->initialize($config);

        if (!$this->upload->do_upload('file')) {
            $json = array('error' => true, 'message' => $this->upload->display_errors());
        } else {
            $upload_details = $this->upload->data();

            $this->UserModel->retrieve($id);
            $this->UserModel->picture = $upload_details["file_name"];
            $json = $this->UserModel->save();
        }

        echo json_encode($json);
    }

}
