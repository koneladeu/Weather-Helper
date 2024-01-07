<?php
session_start();
$con = mysqli_connect('localhost', 'root', '', 'weather_helper'); // Update the database name

if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];

// Check if the email already exists in the database
$sql = "SELECT * FROM user WHERE email = '$email'";
$result = mysqli_query($con, $sql);
$num = mysqli_num_rows($result);

if ($num > 0) {
    echo "Email Already Taken";
} else {
    // Insert the user's information into the database
    $sql = "INSERT INTO user (name, email, password) VALUES ('$name', '$email', '$password')";
    if (mysqli_query($con, $sql)) {
        $_SESSION['name'] = $name;
        header("Location: index.html");
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($con);
    }
}

mysqli_close($con);
?>
