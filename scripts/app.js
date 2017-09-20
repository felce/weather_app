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
            >cur_temp  текущая температура
            >cur_weather (ICON) < font awesome (sunny, rainy, snowy, cloudy)
            >cur_time < unistump
            >Object with {[time]:value(unistamp), [temperature]:value, [weather])}
             */
        })
    }
});