<?php
require_once('PHPMailer-master/src/PHPMailer.php');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$namep = $_POST['namep'];
$prenomp = $_POST['prenomp'];
$pr = $_POST['pr'];


$output = "Nom: ".$namep."\nPrénom: ".$prenomp."\nEmail: ".$pr;

$email = new PHPMailer();
$email->SetFrom('Anonyme@gmail.com', 'New recruit'); //Name is optional
$email->Subject   = 'Cv';
$email->Body      = $output;
$email->AddAddress( 'contact@datanetworksolutions.fr' );

$file_to_attach = 'attachments/';

$email->AddAttachment( $file_to_attach , 'attachment' );

return $email->Send();