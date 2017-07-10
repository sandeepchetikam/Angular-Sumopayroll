<?php 
header('Aceess-Control-Header-Origin: *');
$servername="localhost";
$username="root";
$password="sandeepchetikam";
$dbase="mydb";
$conn=mysqli_connect($servername,$username,$password,$dbase);
if (!$conn) {
	echo "Connection Problem".mysqli_connect_error($conn);
}

	
$post =json_decode($_POST['data'], true);
print_r($post);
$firstname=$post['firstname'];
$lastname=$post['lastname'];
$dateofbirth=$post['dateofbirth'];
$city=$post['city'];
$gender=$post['gender'];
$worklocation=$post['worklocation'];
$aadhar = $post['aadharno'];
$panno = $post['panno'];
$employeetype = $post['employeetype'];
$phoneno = $post['phoneno'];
$emailid = $post['emailid'];
$title = $post['title'];
$department = $post['department'];
$jobdescription = $post['jobdescription'];
$startdate = $post['startdate'];
$employeeid = $post['empid'];	
$status = 'Draft';


$sql = "INSERT INTO Newdb( worklocation, firstname, lastname, gender, aadharno, panno, employeetype, dateofbirth,title,department,jobdescription,startdate,employeeid, city,status,phoneno,emailid) VALUES ('".$worklocation."','".$firstname."','".$lastname."','".$gender."','".$aadhar."','".$panno."','".$employeetype."','".$dateofbirth."','".$title."','".$department."','".$jobdescription."','".$startdate."','".$employeeid."','".$city."','".$status."','".$phoneno."','".$emailid."')";
if (mysqli_query($conn,$sql)) {
	echo "DATA has been submitted";
}else{
	echo "error Found".mysqli_error($conn);
}
?>