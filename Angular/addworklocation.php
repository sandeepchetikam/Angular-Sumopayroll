<?php 
	header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
$servername="localhost";
$username="root";
$password="sandeepchetikam";
$dbase="mydb";
$conn=mysqli_connect($servername,$username,$password,$dbase);
if (!$conn) {
	echo "Connection Problem".mysqli_connect_error($conn);
}
$post =json_decode($_POST['workLocation'], true);
$state = $_POST['state'];
$city = $_POST['city'];

$sql= " INSERT INTO otherdata(state,city) WHERE (".$state.",".$city.") ";

?>