<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,OPTIONS');

  $data = ["dataFromServerStatus1" => "200 - success",
		   "dataFromServerStatus2" => "400 - forbidden",
		   "dataFromServerStatus3" => "401 - error",
		   "dataFromServerStatus4" => "404 - not found",
		   "dataFromServerStatus5" => "500 - server / code error",
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
	$data = array_merge($data, $_POST);
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
	$phpInput = json_decode(file_get_contents('php://input'), TRUE);
    $data = array_merge($data, $phpInput);
	$data['angMethodKay'] = 'PUT';
  }
  
  if($_SERVER['REQUEST_METHOD'] == 'PATCH')
  {
    $phpInput = json_decode(file_get_contents('php://input'), TRUE);
    $data = array_merge($data, $phpInput);
	$data['angMethodKay'] = 'PATCH';
  }
  
  if($_SERVER['REQUEST_METHOD'] === 'DELETE')
  {
	parse_str(file_get_contents('php://input'), $_DELETE);

    /////$data = $_DELETE;
	$data['angMethodKay'] = 'DELETE';
  }


  
  echo json_encode($data);
?>