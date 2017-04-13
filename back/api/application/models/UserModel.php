<?php
require_once __DIR__.'/AbstractModel.php';

/**
 * Description of User
 *
 * @author olivier
 */
class UserModel extends AbstractModel{
    
    public $login;
    public $password;
    
    public function __construct(){
        parent::__construct();
        $this->table = "user";
    }
    
    public function exist(){
         $result = $this->db->get_where($this->table, array('login' => $this->login, 'password' => $this->password));
         return $result->result_object();
    }
}
