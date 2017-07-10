<!DOCTYPE html>
<html>
<head>
	<title>View Page</title>
</head>
<body>
<?php 
	$servername = "localhost";
	$username = "root";
	$password = "sandeepchetikam";
	$database = "mydb";
 $conn = mysqli_connect($servername,$username,$password,$database);
 if(!$conn){
 	echo "Connection Failed " .mysqli_connect_error($conn);
 }

?>

</body>
</html>