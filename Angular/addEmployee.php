<?php 
	
header('Access-Control-Allow-Origin: *');    
    header('Access-Control-Allow-Headers: X-Requested-With');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
    header('"Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"');
$servername="localhost";
$username="root";
$password="sandeepchetikam";
$dbase="mydb";
$conn=mysqli_connect($servername,$username,$password,$dbase);
if (!$conn) {
	echo "Connection Problem".mysqli_connect_error($conn);
}
 
 	$id = $_POST['id'];    
    $name=$_POST['firstname'];
    $lastname=$_POST['lastname'];
    $gender=$_POST['gender'];
    $dateofbirth=$_POST['dateofbirth'];
    $city = $_POST['city'];
    echo $id;
    

$sql ="INSERT INTO employees (firstname,lastname,gender,dateofbirth,city)
VALUES('','','','','')";
if (mysqli_query($conn,$sql)) {
	echo "DATA has been submitted";
}else{
	echo "error".mysqli_error($conn);
}
?>