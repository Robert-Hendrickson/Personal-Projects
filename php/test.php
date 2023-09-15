<!DOCTYPE html>
<?php
$passed_info = false;
$type;
if($_GET){
    $type = $_GET['el'];
    $passed_info = true;
}
?>
<html>
    <body>
        <?php if(!$passed_info){?>
            <div>test text</div>
        <?php }elseif($passed_info){?>
            <div><?=$type?></div>
            <?php }; ?>
    </body>
</html>