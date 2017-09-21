<?php
function getDataJson()
{
	$content = file_get_contents('data/today.json');
	$content = json_decode($content, true);

	$index = 0;
	$data = [];

	foreach ($content['list'] as $key => $value) {
		if ($index === 0) {
			$data['cur_time'] = $value['dt'];
			$data['cur_temp'] = (int)$value['main']['temp'] - 273;
			$data['cur_weather'] = checkJsonWeather($value['weather']['main']);
		} else {
			$data[$index]['time'] = $value['dt'];
			$data[$index]['temp'] = (int)$value['main']['temp'] - 273;
			$data[$index]['weather'] = checkJsonWeather($value['weather']['main']);
		}
		$index++;
	}

	$data = json_encode($data, JSON_PRETTY_PRINT);
	return $data;
}

function checkJsonWeather($json_weather)
{

	static $weather = ['sunny', 'rainy', 'snowy', 'cloudy'];
	if ($json_weather === 'Clear') {
		return $weather[0];
	} elseif ($json_weather === 'Rain') {
		return $weather[1];
	} elseif ($json_weather === 'Clouds') {
		return $weather[3];
	} else {
		return $weather[0];
	}
}

