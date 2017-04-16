<?php

require_once 'Event.php';
/**
 * Description of JWTEvent
 *
 * @author olivier
 */
class JWTEvent extends Event {

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

        if (!isset($this->json->id)) {
            $this->json->id = 0;
        }

        $this->EventModel->id = $this->json->id;
        $this->EventModel->label = $this->json->label;
        $this->EventModel->description = $this->json->description;
        $this->EventModel->address = $this->json->address;
        $this->EventModel->address_name = $this->json->address_name;
        $this->EventModel->date_start = $this->json->date_start;
        $this->EventModel->date_end = $this->json->date_end;
        $this->EventModel->lat = $this->json->lat;
        $this->EventModel->lon = $this->json->lon;

        echo json_encode(
                array(
                    "code" => 0,
                    "response" => array(
                        "token" => $this->jwt,
                        "event" => $this->EventModel->save()
                    )
                )
        );
    }
    
    public function delete() {
        if ($this->json) {
            $this->EventModel->id = $this->json->id;
            
            echo json_encode(
                array(
                    "code" => 0,
                    "response" => array(
                        "token" => $this->jwt,
                        "furnitureType" => $this->EventModel->delete()
                    )
                )
        );
        }
    }

}
