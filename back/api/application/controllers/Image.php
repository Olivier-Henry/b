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
        $this->load->model('imagemodel');
    }

    public function save($id = 0) {
        $json = array();

        if ($id === 0) {
            return false;
        }

        if (!is_dir('../../images/products/' . $id)) {
            mkdir('../../images/products/' . $id);
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

            $this->imagemodel->id = 0;
            $this->imagemodel->name = $upload_details["file_name"];
            $this->imagemodel->furniture_id = intval($id);
            $this->imagemodel->id = $this->imagemodel->save();
            
            $json = $this->imagemodel;
        }

        echo json_encode($json);
    }

    public function delete() {
        
        if (intval($this->json->id) < 1) {
            return false;
        }
 
        $file = '../../images/products/' . $this->json->id . '/' . $this->json->name;

        if (is_file($file) && unlink($file)) {
            $this->imagemodel->id = $this->json->id;
            echo json_encode($this->imagemodel->delete());
        }else{
            echo false;
        }
        
    }

}
