<?php

require_once __DIR__ . '\AbstractModel.php';

/**
 * Description of FurnitureModel
 *
 * @author olivier
 */
class FurnitureModel extends AbstractModel {

    public $type_id;
    public $finish_id;
    public $size_id;
    public $published;
    public $price;
    public $stock;

    public function __construct() {
        parent::__construct();
        $this->table = 'furniture';
    }

}
