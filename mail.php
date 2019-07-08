<?php if(!empty($_POST["name"])) { $name = $_POST["name"]; } ?>
<?php if(!empty($_POST["phone"])) { $phone = $_POST["phone"]; } ?>
<?php
    $recepient = "jonny8k@mail.ru"; /*j0nnu@yandex.by*/
    $sitename = "Трансформация.бел"; /*flirting.zae-box.by*/

    $name = trim($name);
	$phone = trim($phone);

    $pagetitle = "Новая заявка с сайта \"$sitename\"";
    $message = "Имя: $name \nТелефон: $phone";
    mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>
