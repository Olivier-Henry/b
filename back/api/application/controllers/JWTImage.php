<?php

require_once 'Image.php';

/**
 * 
 * Description of JWTImage
 *
 * @author olivier
 */
class JWTImage extends Image {

    public function __construct() {
        parent::__construct();
        $this->load->model("UserModel");
        $this->headers = apache_request_headers();

        if (!isset($this->headers["Authorization"]) || empty($this->headers["Authorization"])) {
            show_404();
        }

        $token = explode(" ", $this->headers["Authorization"]);
        $u = JWT::decode(trim($token[1], '"'));

        $this->UserModel->id = $u->id;
        $this->UserModel->login = $u->login;
        $r = $this->UserModel->is();

        if (!$this->json || !is_array($r) || !count($r)) {
            show_404();
        }

        $u->iat = time();
        $u->exp = time() + EXP;
        $this->jwt = JWT::encode($u, SECRET_KEY);
    }

    public function delete() {
        
        if (intval($this->json->furniture_id) < 1) {
            return false;
        }

        $file = '../../images/products/' . $this->json->furniture_id . '/' . $this->json->name;
        if (is_file($file) && unlink($file)) {
           
            $this->ImageModel->id = $this->json->id;
            
            echo json_encode(
                    array(
                        "code" => 0,
                        "response" => array(
                            "token" => $this->jwt,
                            "picture" => $this->ImageModel->delete()
                        )
                    )
            );
        } else {
            
            echo false;
        }
    }

}
