<?php
require 'database.php';
require 'json.php';
require 'api.php';
if (isset ($_REQUEST['data'])) {
	$data = $_REQUEST['data'];

	if (data === 'database') {
		echo getDataBase();
	} elseif (data === 'json') {
		echo getDataJson();
	} elseif (data === 'api') {
		echo getDataApi();
	} else {
		echo 'bad request';
	}
}
