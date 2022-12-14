<?php 

class index extends CI_Controller{

	public function __construct()
    {
        parent::__construct();
        $this->load->model('M_peserta');
    }

	public function index() {
		$data['title'] = 'Halaman Utama';

		$this->load->view('template/app_top', $data);
		$this->load->view('index/index');
		$this->load->view('template/app_bottom');

	}

	public function grafikA(){
		$data['title'] = 'Grafik Prodi Pilihan 1';

		$data['amd'] = $this->M_peserta->getG1();
		$this->load->view('template/app_top', $data);
		$this->load->view('index/soal_satu');
		$this->load->view('template/app_bottom');
	}

	public function grafikB(){
		$data['title'] = 'Grafik Prodi Pilihan 2';

		$data['amd'] = $this->M_peserta->getG2();
		$this->load->view('template/app_top', $data);
		$this->load->view('index/soal_dua');
		$this->load->view('template/app_bottom');
	}

	public function grafikC(){
		$data['title'] = 'Grafik Tingkat Prestasi';

		$data['amd'] = $this->M_peserta->getG3();
		$this->load->view('template/app_top', $data);
		$this->load->view('index/soal_tiga');
		$this->load->view('template/app_bottom');
	}

	public function grafikD(){
		$data['title'] = 'Grafik Bank';

		$data['amd'] = $this->M_peserta->getG4();
		$this->load->view('template/app_top', $data);
		$this->load->view('index/soal_empat');
		$this->load->view('template/app_bottom');
	}

	public function grafikE(){
		$data['title'] = 'Grafik Total Pendapatan Per-Bank';

		$data['amd'] = $this->M_peserta->getG5();
		$this->load->view('template/app_top', $data);
		$this->load->view('index/soal_lima');
		$this->load->view('template/app_bottom');
	}

	public function grafikF(){
		$data['title'] = 'Grafik Status Pendaftar Per-Bank';

		$data['amd'] = $this->M_peserta->getG6();
		$this->load->view('template/app_top', $data);
		$this->load->view('index/soal_enam');
		$this->load->view('template/app_bottom');
	}
	
}

 ?>