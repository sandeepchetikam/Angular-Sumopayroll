<?php 
header('Aceess-Control-Header-Origin: *');
$servername ="localhost";
$username ="root";
$password="sandeepchetikam";
$dbase = "mydb";

$conn = mysqli_connect($servername,$username,$password,$dbase);
if(!$conn){
	echo "Error" .mysqli_error($conn);
}

$sql = "SELECT state,city FROM otherdata";
$result = mysqli_query($conn,$sql);

if(!$result){
    // you only use `mysqli_connect_error` to get connection errors
    // use mysqli_error($result) for normal query errors
    echo "Query failed " . mysqli_error($result);
    echo json_encode(array('error'=>'Query failed'));
    exit;
}

if ( mysqli_num_rows($result) > 0 ) {
    while($row = mysqli_fetch_assoc($result)){
        // now as you only have what you want in your assoc array
        $rows[] = $row;
    }
    echo json_encode($rows);
} else {
    // no data returned from query
    // return something so the calling code knows what to do
    echo json_encode(array('error'=>'No data in table'));
}


?>