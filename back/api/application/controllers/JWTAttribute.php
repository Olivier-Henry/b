<?php

require_once 'Attribute.php';
/**
 * Description of JWTAttribute
 *
 * @author olivier
 */
class JWTAttribute {

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
    
     public function save() {
       
        if ($this->json) {
            
            if(!isset($this->json->id)){
                $this->json->id = 0;
            }
            
            $this->AttributeModel->id = $this->json->id;
            $this->AttributeModel->label = $this->json->label;
            $this->AttributeModel->type_id = $this->json->type_id;
            
             echo json_encode(
                array(
                    "code" => 0,
                    "response" => array(
                        "token" => $this->jwt,
                        "attribute" => $this->AttributeModel->save()
                    )
                )
        );
        }
    }

    public function delete() {
        if ($this->json) {
            $this->AttributeModel->id = $this->json->id;
            
            echo json_encode(
                array(
                    "code" => 0,
                    "response" => array(
                        "token" => $this->jwt,
                        "attribute" => $this->AttributeModel->delete()
                    )
                )
        );
        }
    }
}
