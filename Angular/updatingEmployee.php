<?php 

$servername="localhost";
$username="root";
$password="sandeepchetikam";
$dbase="mydb";
$conn=mysqli_connect($servername,$username,$password,$dbase);
if (!$conn) {
	echo "Connection Problem".mysqli_connect_error($conn);
}
header('Aceess-Control-Header-Origin: *');
	
$post =json_decode($_POST['data'], true);
print_r($post);
$id = $post['id'];
$firstname=$post['firstname'];
$lastname=$post['lastname'];
$dateofbirth=$post['dateofbirth'];
$city=$post['city'];
$gender=$post['gender'];
$worklocation=$post['worklocation'];
$aadhar = $post['aadharno'];
$panno = $post['panno'];
$employeetype = $post['employeetype'];

$sql="UPDATE newdb SET `firstname`='".$firstname."',`lastname`='".$lastname."',`dateofbirth`='".$dateofbirth."',`city`='".$city."',`gender`='".$gender."',`worklocation`='".$worklocation."',`aadharno`='".$aadhar."',`panno`='".$panno."',`employeetype`='".$employeetype."' WHERE id=".$id;
if (mysqli_query($conn,$sql)) {
	echo " has been submitted";
}else{
	echo "error Found".mysqli_error($conn);
}
?>