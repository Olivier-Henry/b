<?php


/**
 *
 * @author olivier
 */
interface InterfaceModel {
   
    public function get($id = 0);
    public function save();
    public function insert();
    public function update();
    public function delete();
    
}
