<?php

require_once 'User.php';

/**
 * Description of JWTUser
 *
 * @author olivier
 */
class JWTUser extends User {

    public function __construct() {
        parent::__construct();
        $this->headers = apache_request_headers();

        if (!isset($this->headers["Authorization"]) || empty($this->headers["Authorization"])) {
            show_404();
        }

        $token = explode(" ", $this->headers["Authorization"]);
        $u = JWT::decode(trim($token[1], '"'));

        $this->UserModel->id = $u->id;
        $this->UserModel->login = $u->login;
        $r = $this->UserModel->is();

        if (!is_array($r) || !count($r)) {
            show_404();
        }

        $u->iat = time();
        $u->exp = time() + EXP;
        $this->jwt = JWT::encode($u, SECRET_KEY);
    }

    public function get($id = 0) {
        $user = $this->UserModel->get(intval($id));

        if (is_object($user)) {
            $user->password = null;
        } else if (is_array($user) & count($user)) {
            foreach ($user as $k => $u) {
                $u->password = null;
            }
        }

        echo json_encode(
                array(
                    "code" => 0,
                    "response" => array(
                        "token" => $this->jwt,
                        "users" => $user
                    )
                )
        );
    }

    public function save() {

        if ($this->json) {

            if (!isset($this->json->id)) {
                $this->json->id = 0;
            }

            $this->UserModel->id = $this->json->id;
            $this->UserModel->password = sha1($this->json->password);

            echo json_encode(
                    array(
                        "code" => 0,
                        "response" => array(
                            "token" => $this->jwt,
                            "user" => $this->UserModel->save()
                        )
                    )
            );
        }
    }

    public function delete() {
        if ($this->json) {
            $this->UserModel->id = $this->json->id;

            echo json_encode($this->UserModel->delete());

            echo json_encode(
                    array(
                        "code" => 0,
                        "response" => array(
                            "token" => $this->jwt,
                            "user" => $this->FinishModel->save()
                        )
                    )
            );
        }
    }

}
