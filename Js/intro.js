let $ = document;
let counter = 0;
setInterval(function ch(){
    if (counter % 2 == 0 ){
        $.querySelector('.iTopic').innerHTML="مقایسه ";
        $.querySelector('.iTopic').style.color='red';
        ++counter
    }

    else{
        $.querySelector('.iTopic').innerHTML="انتخاب ";
        $.querySelector('.iTopic').style.color='green';
        ++counter
    }   

},3000);
