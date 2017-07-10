<?php 

header("Access-Control-Allow-Origin: *");
$servername="localhost";
$username="root";
$password="sandeepchetikam";
$dbase="mydb";

$conn=mysqli_connect($servername,$username,$password,$dbase);
if (!$conn) {
    echo "Connection Problem".mysqli_connect_error($conn);
}

// first only select what you want to use from the row
$sql= "SELECT`id`, `worklocation`, `firstname`, `lastname`, `gender`, `aadharno`, `panno`, `employeetype`, `dateofbirth`, `city`,`status`,`emailid`,`phoneno`,`department`,`title`,`jobdescription`,`startdate`,`employeeid`
         FROM newdb WHERE status='Draft'";

$result = mysqli_query($conn,$sql);
if(!$result){
    // you only use `mysqli_connect_error` to get connection errors
    // use mysqli_error($result) for normal query errors
    echo "Query failed " . mysqli_error($result);
    echo json_encode(array('error'=>'Query failed'));
    exit;
}
$rowcount=mysqli_num_rows($result);

if ( mysqli_num_rows($result) > 0 ) {
    while($row = mysqli_fetch_assoc($result)){
        // now as you only have what you want in your assoc array
        $rows[] = $row;
    }
    echo json_encode($mysqli_num_rows);
    
} else {
    // no data returned from query
    // return something so the calling code knows what to do
    echo json_encode(array('error'=>'No data in table'));
}
?>