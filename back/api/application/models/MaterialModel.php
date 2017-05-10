<?php

require_once __DIR__ . '/AbstractModel.php';

/**
 * Description of MaterialModel
 *
 * @author olivier
 */
class MaterialModel extends AbstractModel{
    //put your code here
    
    public $label;
    
    public function __construct() {
        parent::__construct();
        $this->table = 'material';
    }
}
