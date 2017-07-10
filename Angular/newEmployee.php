<?php
header("Allow-Access-Header-Origin: *");
$servername ="localhost";
$username ="root";
$password="sandeepchetikam";
$dbase = "mydb";

$conn = mysqli_connect($servername,$username,$password,$dbase);
if(!$conn){
	echo "Error" .mysqli_error($conn);
}

$post = json_decode($_POST['data']);
$firstname=$_POST['firstname'];
$lastname=$_POST['lastname'];
$dateofbirth=$_POST['dateofbirth'];
$city=$_POST['city'];
$gender=$_POST['gender'];

$sql= "INSERT INTO employees (lastname,dateofbirth,city,gender) VALUES (".$lastname.",".$dateofbirth.",".$city.",".$gender.")"

?>