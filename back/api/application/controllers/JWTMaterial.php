<?php

require_once 'Material.php';

/**
 * Description of JWTMaterial
 *
 * @author olivier
 */
class JWTMaterial extends Material {

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

            if (!isset($this->json->id)) {
                $this->json->id = 0;
            }

            $this->MaterialModel->id = $this->json->id;
            $this->MaterialModel->label = $this->json->label;

            $this->MaterialModel->save();

            if ($this->MaterialModel->id && is_array($this->json->types)) {
                $materialTypes = [];
                foreach ($this->json->types as $key => $type) {
                    array_push($materialTypes, array(
                        'type_id' => $type->type_id,
                        'material_id' => $this->MaterialModel->id)
                    );
                }
                
                $this->MaterialModel->saveTypes($materialTypes);
            }

            echo json_encode(
                    array(
                        "code" => 0,
                        "response" => array(
                            "token" => $this->jwt,
                            "material" => $this->MaterialModel->id
                        )
                    )
            );
        }
    }

    public function delete() {

        if ($this->json) {
            $this->MaterialModel->id = $this->json->id;

            echo json_encode(
                    array(
                        "code" => 0,
                        "response" => array(
                            "token" => $this->jwt,
                            "material" => $this->MaterialModel->delete()
                        )
                    )
            );
        }
    }

}
