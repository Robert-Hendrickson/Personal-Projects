function textUpdate(){
    $('textarea#translated-text')[0].value = $('textarea#entered-text')[0].value;
}
//variables hold example and text boxes for changing fonts
let example = null;
let content = null
$(document).ready(function (){
    example = $('#example-text')[0];
    content = $('textarea#translated-text')[0];
});
//changes viewable font styles based on font selected
function fontSelect(){
    let x = $('.font-selector select')[0].value;
    if($('select.style.active').length > 0){
        $('select.style.active').removeClass('active');
    }
    if(x != 'none'){
        $(`select#${x}`).addClass('active');
        $(`select#${x}`)[0].value = 'default';
    }
    styleSelect();
}
function styleSelect(){
    //no font select
    if($('.font-selector select')[0].value === 'none'){
        example.style.fontFamily = 'none';
        content.style.fontFamily = 'none';
    }else{
        if($('select.style.active')[0].value === 'default'){
            let x = $('.font-selector select')[0].value;
            example.style.fontFamily = x;
            content.style.fontFamily = x;
        }
        if($('select.style.active').length > 0){
            let x = $('select.style.active')[0].value;
            example.style.fontFamily = x;
            content.style.fontFamily = x;
        }
    }
}