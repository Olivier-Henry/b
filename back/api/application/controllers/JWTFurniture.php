<?php

require_once './Furniture.php';

/**
 * Description of JWTFurniture
 *
 * @author olivier
 */
class JWTFurniture extends Furniture{
    
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
            
            $this->FurnitureModel->id = $this->json->id;
            $this->FurnitureModel->label = $this->json->label;
            $this->FurnitureModel->type_id = $this->json->type->id;
            $this->FurnitureModel->finish_id = $this->json->finish->id;
            $this->FurnitureModel->published = isset($this->json->published) ? $this->json->published : 0;
            $this->FurnitureModel->price = $this->json->price;
            $this->FurnitureModel->stock = $this->json->stock;
            $this->FurnitureModel->delay = $this->json->delay;
            $this->FurnitureModel->width = $this->json->width;
            $this->FurnitureModel->height = $this->json->height;
            $this->FurnitureModel->depth = $this->json->depth;
            $this->FurnitureModel->description = $this->json->description;
            
             echo json_encode(
                array(
                    "code" => 0,
                    "response" => array(
                        "token" => $this->jwt,
                        "furniture" => $this->FurnitureModel->save()
                    )
                )
        );
        }
    }
}
