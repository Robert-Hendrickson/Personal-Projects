function textUpdate(){
    $('textarea#translated-text')[0].value = $('textarea#entered-text')[0].value;
}
function fontSelect(){
    let x = $('.font-selector select')[0].value;
    let example = $('#example-text')[0];
    let content = $('textarea#translated-text')[0];
    example.style.fontFamily = x;
    content.style.fontFamily = x;
}