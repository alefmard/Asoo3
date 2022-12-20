let $ = document;
let counter = 0;
setInterval(function ch(){
    if (counter % 3 == 0 ){
        $.querySelector('.iTopic').innerHTML="مسیر شغلی";
        $.querySelector('.iTopic').style.color='red';
        ++counter
    }
    else if(counter % 3 == 1){
        $.querySelector('.iTopic').innerHTML="مسیر پیشرفت";
        $.querySelector('.iTopic').style.color='green';
        ++counter
    }   
    else{
        $.querySelector('.iTopic').innerHTML="مسیر آموزشی";
        $.querySelector('.iTopic').style.color='var(--color2)';
        ++counter
    }
},2000);
