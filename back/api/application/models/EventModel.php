<?php

require_once __DIR__ . '/AbstractModel.php';

/**
 * Description of EventModel
 *
 * @author olivier
 */
class EventModel extends AbstractModel {

    public $label;
    public $description;
    public $address;
    public $address_name;
    /**
     * @var DateTime
     */
    public $date_start;
    /**
     *
     * @var DateTime
     */
    public $date_end;
    public $lat;
    public $lon;

    public function __construct() {
        parent::__construct();
        $this->table = 'events';
    }

}
