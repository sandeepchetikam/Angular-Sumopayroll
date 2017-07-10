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

$id = $_GET['id'];
$result ="DELETE FROM newdb WHERE id=$id" ;
	if (mysqli_query($conn, $result)) {
    echo "Record deleted successfully";
} else {
    echo "Error deleting record: " . mysqli_error($conn);
}
 echo json_encode(array('success'=>'Query deleted'));?>