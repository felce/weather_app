$(document).ready(function () {

	getData('json');

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

			for (var key in result) {
				if (typeof (result[key]) === 'object') {
					$('#forecast').append(
						'<div class="hourly-forecast clearfix">' +
						'<div class="forecast-date">' + toTime(result[key]['time']) + '</div>' +
						'<div class="forecast-weather">' +
						'<div class="forecast-temperature">' + result[key]['temp'] + '&deg;</div>' +
						'<div class="forecast-icon">' +
						'<img id="cur_weather_img" height="45" src="' + 'icons/' + getimage(result[key]['weather']) + '">' +
						'</div>' +
						'</div>' +
						'</div>'
					)
				}
			}

			$('.date').html(toCurrentTime(result['cur_time']));
			$('.current-temperature').html(result['cur_temp']);
			$('#cur_weather_img').attr("src", 'icons/' + getimage(result['cur_weather']));
		})
	}
});

function toCurrentTime(dt) {
	var d = new Date();
	var time = d.setTime(dt * 1000);
	var date = new Date(time);

	var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	return weekday[date.getDay()] + '<br>' + date.getDate().toString() + "/" + date.getMonth().toString();
}

function toTime(dt) {
	var d = new Date();
	var time = d.setTime(dt * 1000);
	var date = new Date(time);

	return date.getHours().toString() + ":00";
}


function getimage(weather) {
	if (weather === 'sunny') {
		return '01.png';
	} else if (weather === 'rainy') {
		return '03.png';
	} else if (weather === 'snowy') {
		return '04.png';
	} else if (weather === 'cloudy') {
		return '02.png';
	}
}

function clearPage() {
	$('#forecast').html('');
	$('#current_temperature').html('');
	$('#date').html('');
}
