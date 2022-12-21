let MaktabFlag = true
let FaraDarsFlag = true
let RoocketFlag = true
let SabzLearnFlag = true
let CourseraFlag = true
let YouTubeFlag = true

function Maktab(){
    let MaktabCourses = document.querySelectorAll('.Maktab');
    if(MaktabFlag){
        MaktabCourses.forEach(element => {
            element.style.display = 'none';
        });
        MaktabFlag = false
    }
    else{
        MaktabCourses.forEach(element => {
            element.style.display = 'flex';
        });
        MaktabFlag = true
    }
    
}


function FaraDars(){
    let FaraDarsCourses = document.querySelectorAll('.FaraDars');
    if(FaraDarsFlag){
        FaraDarsCourses.forEach(element => {
            element.style.display = 'none';
        });
        FaraDarsFlag = false
    }
    else{
        FaraDarsCourses.forEach(element => {
            element.style.display = 'flex';
        });
        FaraDarsFlag = true
    }
    
}

function Roocket(){
    let RoocketCourses = document.querySelectorAll('.Roocket');
    if(RoocketFlag){
        RoocketCourses.forEach(element => {
            element.style.display = 'none';
        });
        RoocketFlag = false
    }
    else{
        RoocketCourses.forEach(element => {
            element.style.display = 'flex';
        });
        RoocketFlag = true
    }
    
}
function SabzLearn(){
    let SabzLearnCourses = document.querySelectorAll('.SabzLearn');
    if(SabzLearnFlag){
        SabzLearnCourses.forEach(element => {
            element.style.display = 'none';
        });
        SabzLearnFlag = false
    }
    else{
        SabzLearnCourses.forEach(element => {
            element.style.display = 'flex';
        });
        SabzLearnFlag = true
    }
    
}
function Coursera(){
    let CourseraCourses = document.querySelectorAll('.Coursera');
    if(CourseraFlag){
        CourseraCourses.forEach(element => {
            element.style.display = 'none';
        });
        CourseraFlag = false
    }
    else{
        CourseraCourses.forEach(element => {
            element.style.display = 'flex';
        });
        CourseraFlag = true
    }
    
}
function YouTube(){
    let YouTubeCourses = document.querySelectorAll('.YouTube');
    if(YouTubeFlag){
        YouTubeCourses.forEach(element => {
            element.style.display = 'none';
        });
        YouTubeFlag = false
    }
    else{
        YouTubeCourses.forEach(element => {
            element.style.display = 'flex';
        });
        YouTubeFlag = true
    }
    
}