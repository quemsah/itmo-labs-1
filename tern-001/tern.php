<?php
$age = $_POST['aage'];
$restricted = ($age < 18) ? 'yes' : 
(($age == 18) ? 'notsure' : 'no');
echo "age =  $age, ответ = $restricted"; 
?>