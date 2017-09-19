$(document).ready(function () {
    $('#JSON_data').on('click', function (event) {
        $('.active').removeClass('active');
        $(this).addClass('active');
    });
    $('#DB_data').on('click', function (event) {
        $('.active').removeClass('active');
        $(this).addClass('active');
    });
    $('#API_data').on('click', function (event) {
        $('.active').removeClass('active');
        $(this).addClass('active');
    });
});