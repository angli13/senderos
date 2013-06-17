<?php
session_start();
if(!session_is_registered(myusername)){
header("location:main_login.php");
}

error_reporting(0);
include 'config.php';
include 'lazy_mofo.php';
header("Content-Type: text/html;charset=utf-8");
echo "<html><head><link rel='stylesheet' type='text/css' href='style.css' /></head><body>"; 
try {
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);	
		} catch(PDOException $e) {
	echo '{"error":{"text":'. $e->getMessage() .'}}'; 
}
	// create LM object, pass in PDO connection
$lm = new lazy_mofo($dbh); 

// table name for updates, inserts and deletes
$lm->table = 'locales';

// identity / primary key column name
$lm->identity_name = 'ID';

// query for grid(). if the last column selected is the primary key identity, then the [edit] and [delete] links are displayed
$lm->grid_sql = "select RANK, LOGO, NOMBRE, SLOGAN, STATUS, DESCRIPCION, KEYWORDS, DIRECCION, LAT, LNG, TELEFONO, FACEBOOK, TWITTER, EMAIL, HORARIO, F_PAGO, SERV_DOM, PAGINA, ID from locales ";

// define input controls on the form
$lm->form_input_control = array('LOGO' => '--image', 'STATUS' => '--checkbox');

$lm->grid_output_control = array('LOGO' => '--image');

$lm->grid_input_control = array('STATUS' => '--checkbox','SERV_DOM' => '--checkbox','F_PAGO' => '--checkbox'
/*, 'NOMBRE' => '--text', 'DESCRIPCION' => '--textarea', 'DIRECCION' => '--textarea', 'FACEBOOK' => '--text', 'TWITTER' => '--text', 'HORARIO' => '--text', 'F_PAGO' => '--text', 'PAGINA' => '--text', 'TELEFONO' => '--number'
*/
);
// use the lm controller 
$lm->run();


echo "
<a href='logout.php'>Salir</a>
</body></html>";


?>