<?php

defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Description of Image
 *
 * @author olivier
 */
class Image extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->json = json_decode($this->security->xss_clean($this->input->raw_input_stream));
        $this->load->model('ImageModel');
    }

    public function save($id = 0) {
        $json = array();

        if ($id === 0) {
            return false;
        }

        if (!is_dir('../../images/products/' . $id)) {
            mkdir('../../images/products/' . $id, 0777, true);
        }

        $config['upload_path'] = '../../images/products/' . $id;
        $config['allowed_types'] = 'gif|jpg|png';
        $config['encrypt_name'] = TRUE;

        $this->load->library('upload', $config);

        $this->upload->initialize($config);

        if (!$this->upload->do_upload('file')) {
            $json = array('error' => true, 'message' => $this->upload->display_errors());
        } else {
            $upload_details = $this->upload->data();

            $this->ImageModel->id = 0;
            $this->ImageModel->name = $upload_details["file_name"];
            $this->ImageModel->furniture_id = intval($id);
            $this->ImageModel->id = $this->ImageModel->save();
            
            $json = $this->ImageModel;
        }

        echo json_encode($json);
    }

    public function delete() {
        
        if (intval($this->json->id) < 1) {
            return false;
        }
 
        $file = '../../images/products/' . $this->json->id . '/' . $this->json->name;

        if (is_file($file) && unlink($file)) {
            $this->ImageModel->id = $this->json->id;
            echo json_encode($this->ImageModel->delete());
        }else{
            echo false;
        }
        
    }

}
