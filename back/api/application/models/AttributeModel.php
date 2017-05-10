<?php

require_once __DIR__ . '/AbstractModel.php';

/**
 * Description of AttributeModel
 *
 * @author olivier
 */
class AttributeModel extends AbstractModel {

    public $label;

    public function __construct() {
        parent::__construct();
        $this->table = 'attributes';
    }

}
