<?php

require_once __DIR__ . '/AbstractModel.php';

/**
 * Description of User
 *
 * @author olivier
 */
class UserModel extends AbstractModel {

    public $password;
    public $email;
    public $firstname;
    public $lastname;
    public $picture;

    public function __construct() {
        parent::__construct();
        $this->table = "user";
    }

    public function exist() {
        $result = $this->db->get_where($this->table, array('email' => $this->email, 'password' => $this->password));
        return $result->result_object();
    }

    public function is() {
        $result = $this->db->get_where($this->table, array('id' => $this->id, 'email' => $this->email));
        return $result->result_object();
    }
    
    public function retrieve($id){
        if(!intval($id)){
            return false;
        }
        
        $r = $this->db->get_where($this->table, array('id' => $id))->row_object(0);
        
        $this->id = $r->id;
        $this->email = $r->email;
        $this->password = $r->password;
        $this->firstname = $r->firstname;
        $this->lastname = $r->lastname;
        $this->picture = $r->picture;
        
    }

}
