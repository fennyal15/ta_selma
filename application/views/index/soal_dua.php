<main class="co-md-9 ms-sm-auto col-lg-10 px-md-4">
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    </div>
    <div class="alert alert-primary">
    

<div id = "grafik2">

</div>

<script src="<?= base_url(); ?>public/lib/highchart/code/highcharts.js"></script>

<script>
    
    Highcharts.chart('grafik2', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Grafik Pendaftar Berdasarkan Prodi Pilihan 2'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y}</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Peserta',
            colorByPoint: true,
            data: [
                <?php foreach($amd as $a):?>
                    {
                        name: '<?= $a['nama_prodi']; ?>',
                        y: <?= $a['jumlah']; ?>
                    },
                    <?php endforeach?>
            ]
        }]
    });
</script>
    </div>
    
</main>

