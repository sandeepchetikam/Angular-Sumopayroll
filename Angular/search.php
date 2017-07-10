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
$name =$_GET['search'];

$sql = "SELECT * FROM newdb WHERE firstname LIKE '%{$name}%' ";
$result = mysqli_query($conn,$sql);
while ($row = mysqli_fetch_assoc($result))
{
	$rows[] = $row;
}
echo json_encode($rows);
?>