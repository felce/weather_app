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
			clearPage();
			result = JSON.parse(result);
			var date = new Date();
			date.setTime(result['cur_time']*1000);
			//формируем дату из get... и забрасываем ее на страницу
			$('#current-temperature').text(result['cur_temp']);

			for (var key in result){
				if(typeof (result[key]) === 'object'){

				}
			}
			//TODO: Fill our page
			/*
			>cur_temp  текущая температура
			>cur_weather (ICON) < font awesome (sunny, rainy, snowy, cloudy)
			>cur_time < unistump
			>Object with future:{[time]:value(unistamp), [temperature]:value, [weather])}
			 */
		})
	}
});

function clearPage() {
	$('#forecast').html('');
	$('#current_temperature').html('');
	$('#date').html('');
}