<?php
function getDataApi() {
  $currentData = 'http://dataservice.accuweather.com/currentconditions/v1/324291?apikey=%09JyLaY8I0RaAV0YYKYJy6vAgoeyFpVf1p&language=en-us&details=false';
  $lastSixHoutslData = 'http://dataservice.accuweather.com/currentconditions/v1/324291/historical?apikey=%09JyLaY8I0RaAV0YYKYJy6vAgoeyFpVf1p&language=en-us&details=false';
  $lastData = file_get_contents($lastSixHoutslData);
  $lastjson = json_encode($lastData, true);
  $current = file_get_contents($currentData);
  $currentjson = json_decode($current, true);

  $postData = json_encode(array('curretntTime' => $currentjson[0]['EpochTime']), JSON_FORCE_OBJECT);


  return $currentjson[0]['EpochTime'];
}
