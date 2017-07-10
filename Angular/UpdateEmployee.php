
<?php 
$successreturn[]=array(
        "id"=>"",
       "firstname"=>"",
      "lastname"=>"",
    "dateofbirth"=>"",
    "city"=>"",
    "gender"=>"");
header("Access-Control-Allow-Origin: *");

$servername="localhost";
$username="root";
$password="sandeepchetikam";
$dbase="mydb";
$conn=mysqli_connect($servername,$username,$password,$dbase);
if (!$conn) {
	echo "Connection Problem".mysqli_connect_error($conn);
}
$id=$_GET['id'];

$sql= 'SELECT * FROM newdb WHERE id='.$id ;
$result = mysqli_query($conn,$sql);

if(!$result){
 	echo "Connection Failed " .mysqli_connect_error($result);
 }
 $row = mysqli_fetch_assoc($result);
echo json_encode($row);


?>
