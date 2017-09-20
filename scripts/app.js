$(document).ready(function () {
    $('#JSON_data').on('click', function (event) {
        $('.active').removeClass('active');
        $(this).addClass('active');
        getData('json');
    });
    $('#DB_data').on('click', function (event) {
        $('.active').removeClass('active');
        $(this).addClass('active');
        getData('database');
    });
    $('#API_data').on('click', function (event) {
        $('.active').removeClass('active');
        $(this).addClass('active');
        getData('api');
    });

    function getData(dataType) {
        $.get('main.php', {
            data: dataType
        }, function (result) {
            result = JSON.parse(result);

            //TODO: Fill our page
            /*
            >Current temperature
            >Weather (ICON) < font awesome (sunny, rainy, snowy, cloudy)
            >Time < unistump
            >Object with {[time], [temperature], [weather])}
             */
        })
    }
});