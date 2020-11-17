<?php
	$host = "ec2-3-211-176-230.compute-1.amazonaws.com";
	$user = "qpzadrcqaxaxjy";
	$pass = "43b9366fc26c2cdde6e213b500325aa8db0d7acf4cdc1bcbb616abb6a2897e81";
	$port = "5432";
	$dbname = "d7gagsg14f5tng";
	$conn = pg_connect("host=".$host." port=".$port." dbname=".$dbname." user=".$user." password=".$pass) or die("Gagal");
?>
