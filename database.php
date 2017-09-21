<?php
function getDataBase()
{
	$result = [];
	$sql_response = retrieveData();
	while ($row = $sql_response->fetch_assoc()) {
		if ($row['id'] === '1') {
			$result['cur_temp'] = $row['temperature'];
			$result['cur_weather'] = checkWeather($row['rain_possibility'], $row['snow_posibility'], $row['clouds']);
			$result['cur_time'] = strtotime($row['timestamp']);;
			continue;
		}
		$result[$row['id']]['time'] = strtotime($row['timestamp']);
		$result[$row['id']]['temp'] = $row['temperature'];
		$result[$row['id']]['weather'] = checkWeather($row['rain_possibility'], $row['snow_posibility'], $row['clouds']);;
	}

	$result = json_encode($result);
	return $result;
}

function retrieveData()
{
	$servername = 'localhost';
	$username = 'user';
	$password = 'qweasdzxc';
	$dbname = 'weather';
	$conn = new mysqli($servername, $username, $password, $dbname);
	$sql = 'SELECT * FROM forecast';
	$answer = $conn->query($sql);
	if ($conn->connect_error) {
		die('Error retrieve data: ' . $conn->connect_error);
	}
	return $answer;
}

function checkWeather($rain, $snow, $cloud)
{

	static $weather = ['sunny', 'rainy', 'snowy', 'cloudy'];
	if ($snow > $rain && $snow > 0.6) {
		return $weather[2];
	} elseif ($rain > $snow && $rain > 0.6) {
		return $weather[1];
	} elseif ($cloud > 15) {
		return $weather[3];
	} else {
		return $weather[0];
	}
}