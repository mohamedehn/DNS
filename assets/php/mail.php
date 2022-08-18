<?php



//All form values
$name = $_POST['name'];
$email = $_POST['email'];
$msg = $_POST['msg'];
$prenom	= $_POST['prenom'];
$entreprise = $_POST['entreprise'];
$fonction = $_POST['fonction'];
$motif = $_POST['motif'];
$pays = $_POST['pays'];
$sujet = $_POST['sujet'];

$to = 'contact@datanetworksolutions.fr';
$headers = 'FROM: "'.$email.'"';

$output = "Nom: ".$name."\nPrénom: ".$prenom."\nEmail: ".$email."\nEntreprise: ".$entreprise."\nFonction: ".$fonction."\nMotif de la demande: ".$motif."\nPays: ".$pays."\nSujet: ".$sujet."\n\nMessage: ".$msg;

$send = mail($to, $name, $output, $headers);
