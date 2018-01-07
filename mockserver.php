<?php
  header('Access-Control-Allow-Origin: *');

  $data = ["status1" => "200 - success",
		   "status2" => "400 - forbidden",
		   "status3" => "401 - error",
		   "status4" => "404 - not found",
		   "status5" => "500 - server / code error",
          ];

  $headers = apache_request_headers();
  $parsedHeaders = [];


  foreach ($headers as $header => $value)
  {
	$parsedHeaders[$header] = $value;
  }
  
  $data = array_merge($data, $parsedHeaders);


  if($_SERVER['REQUEST_METHOD'] === 'POST')
  {
    /////$data = $_POST;
	$data['angMethodKay'] = 'POST';
  }

  if($_SERVER['REQUEST_METHOD'] === 'GET')
  {
    /////$data = $_GET;
	$data = array_merge($_GET, $data);
	$data['angMethodKay'] = 'GET';
  }
  
  if($_SERVER['REQUEST_METHOD'] === 'PUT')
  {
	parse_str(file_get_contents('php://input'), $_PUT);

    /////$data = $_PUT;
	$data['angMethodKay'] = 'PUT';
  }
  
  if($_SERVER['REQUEST_METHOD'] === 'DELETE')
  {
	parse_str(file_get_contents('php://input'), $_DELETE);

    /////$data = $_DELETE;
	$data['angMethodKay'] = 'DELETE';
  }


  header('Content-Type: application/json');
  echo json_encode($data);
?>