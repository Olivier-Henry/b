<?php

require_once 'Type.php';

/**
 * Description of JWTType
 *
 * @author olivier
 */
class JWTType extends Type{

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
        $this->UserModel->email = $u->email;
        $r = $this->UserModel->is();

        if (!$this->json || !is_array($r) || !count($r)) {
            show_404();
        }

        $u->iat = time();
        $u->exp = time() + EXP;
        $this->jwt = JWT::encode($u, SECRET_KEY);
    }
    
     public function save() {
       
        if ($this->json) {
            
            if(!isset($this->json->id)){
                $this->json->id = 0;
            }
            
            $this->TypeModel->id = $this->json->id;
            $this->TypeModel->label = $this->json->label;
            
             echo json_encode(
                array(
                    "code" => 0,
                    "response" => array(
                        "token" => $this->jwt,
                        "type" => $this->TypeModel->save()
                    )
                )
        );
        }
    }

    public function delete() {
        if ($this->json) {
            $this->TypeModel->id = $this->json->id;
            $this->TypeModel->label = $this->json->label;
            
            echo json_encode(
                array(
                    "code" => 0,
                    "response" => array(
                        "token" => $this->jwt,
                        "type" => $this->TypeModel->delete()
                    )
                )
        );
        }
    }
}
