<!DOCTYPE html>
<?php
$passed_info = false;
if($_GET['el']){
    $type = $_GET['el'];
    $passed_info = true;
}
?>
<html>
    <body>
        <?php if(!$passed_info){?>
            "test text";
        <?php }elseif($passed_info){?>
            "thanks for the info"
            <?php }; ?>
    </body>
</html>