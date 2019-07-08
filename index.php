<?php 
require_once('Mobile_Detect.php');  // Подключаем скрипт Mobile_Detect.php
 
$detect = new Mobile_Detect; // Инициализируем копию класса
 
// Любое мобильное устройство (телефоны или планшеты).
if ( $detect->isMobile() ) {
	require_once('index-unadapt-on-mob.html');
}
else { require_once('index-origin.html'); }

?>