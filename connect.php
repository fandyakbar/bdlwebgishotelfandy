<?php
	$host = "ec2-18-210-90-1.compute-1.amazonaws.com";
	$user = "fvxegyhltayjzl";
	$pass = "c03c8ff4e52989e763d33295723382648271d60418e0b8517f7d2c9cbfb30da3";
	$port = "5432";
	$dbname = "d18vd6kfetlpc2";
	$conn = pg_connect("host=".$host." port=".$port." dbname=".$dbname." user=".$user." password=".$pass) or die("Gagal");
?>
