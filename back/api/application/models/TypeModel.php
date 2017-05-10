<?php

require_once __DIR__ . '/AbstractModel.php';
/**
 * Description of TypeModel
 *
 * @author olivier
 */
class TypeModel extends AbstractModel {

    public $label;
    
    public function __construct() {
        parent::__construct();
        $this->table = 'type';
    }
}
