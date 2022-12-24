
let MaktabFlag = true
let FaraDarsFlag = true
let RoocketFlag = true
let SabzLearnFlag = true
let CourseraFlag = true
let YouTubeFlag = true

function Maktab(){
    if(MaktabFlag){
        MaktabFlag = false
    }
    else{
        MaktabFlag = true
    } 
}


function FaraDars(){
    if(FaraDarsFlag){
        FaraDarsFlag = false
    }
    else{
        FaraDarsFlag = true
    }    
}


function Roocket(){
    if(RoocketFlag){
        RoocketFlag = false
    }
    else{
        RoocketFlag = true
    }   
}


function SabzLearn(){
    if(SabzLearnFlag){
        SabzLearnFlag = false
    }
    else{
        SabzLearnFlag = true
    }  
}


function Coursera(){
    if(CourseraFlag){
        CourseraFlag = false
    }
    else{
        CourseraFlag = true
    }
}


function YouTube(){
    if(YouTubeFlag){
        YouTubeFlag = false
    }
    else{
        YouTubeFlag = true
    }  
}


function PriceConvertor(priceString){
    let hezarIndex = priceString.search("ه");
    let isDot = priceString.indexOf(".");

    if (isDot>0){
        priceString = priceString.slice(0,isDot) + priceString.slice(isDot+1)
    }


    let priceNum;
    let price ;
    let order = 0;


    if (hezarIndex != -1){
        let hezarIndex = priceString.search("ه");
        priceNum = priceString.slice(0,hezarIndex);
        priceNum = priceNum.trim();
        let count = priceNum.length;
        if (isDot==-1){
            order = Math.pow(10,3)
        }
        else{
            order = Math.pow(10,3-count+isDot)
        }
    }


    else if (hezarIndex == -1){
        let MilIndex = priceString.search("م");
        if (MilIndex != -1){
            priceNum = priceString.slice(0,MilIndex);
            priceNum = priceNum.trim();
            let count = priceNum.length;
            if (isDot==-1){
                order = Math.pow(10,6)
            }
            else{
                order = Math.pow(10,6-count+isDot)
            }
            
        }


        else{
            priceNum = "۰";
            order = 0;
        }
    }

    

    String.prototype.toEnglishDigits = function () {
        var num_dic = {
            '۰': '0',
            '۱': '1',
            '۲': '2',
            '۳': '3',
            '۴': '4',
            '۵': '5',
            '۶': '6',
            '۷': '7',
            '۸': '8',
            '۹': '9',
            
        }

        return parseInt(this.replace(/[۰-۹]/g, function (w) {
            return num_dic[w]
        }));

        
    }
    priceNum = priceNum.toEnglishDigits()
    price = Number(priceNum)*order;
    return price;
}

function TimeConvertor(timeString){

    let FirstPart = timeString.indexOf(":");
    let hours = timeString.slice(0,Number(FirstPart))

    String.prototype.toEnglishDigits = function () {
        var num_dic = {
            '۰': '0',
            '۱': '1',
            '۲': '2',
            '۳': '3',
            '۴': '4',
            '۵': '5',
            '۶': '6',
            '۷': '7',
            '۸': '8',
            '۹': '9',
            
        }

        return parseInt(this.replace(/[۰-۹]/g, function (w) {
            return num_dic[w]
        }));

        
    }

    return hours.toEnglishDigits()
}


function RangeChange(){

    
String.prototype.toPersinaDigit= function(){
    var id= ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
    return this.replace(/[0-9]/g, function(w){
     return id[+w]
    });
   }

    let RangeValue = document.getElementById("slider").value;
    let RangeValueString = String(RangeValue); 
    document.getElementById("sliderValuePrice").innerHTML = RangeValueString.toPersinaDigit();
}


function TimeChange(){

    
    String.prototype.toPersinaDigit= function(){
        var id= ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
        return this.replace(/[0-9]/g, function(w){
         return id[+w]
        });
       }
    
        let RangeValue = document.getElementById("sliderTime").value;
        let RangeValueString = String(RangeValue); 
        document.getElementById("sliderValueTime").innerHTML = RangeValueString.toPersinaDigit();
}




function filterSubmit(){
    let cards = document.querySelectorAll(".courseCart");
    cards.forEach(element => {
        let price = element.querySelector(".cartPrice").innerHTML;
        let time = element.querySelector(".cartTime").innerHTML;
        price = PriceConvertor(price);
        time = TimeConvertor(time);
        let RangeValue = document.getElementById("slider").value;
        let TimeValue = document.getElementById("sliderTime").value;

        let MaktabCheck = element.classList.contains("Maktab");
        let FaraDarsCheck = element.classList.contains("FaraDars");
        let RoocketCheck = element.classList.contains("Roocket");
        let SabzLearnCheck = element.classList.contains("SabzLearn");
        let CourseraCheck = element.classList.contains("Coursera");
        let YouTubeCheck = element.classList.contains("YouTube");
        console.log(YouTubeCheck);
        if (time<=TimeValue){

            if (price>RangeValue){
                element.style.display='none';
            } 
            else{
                if(MaktabCheck){
                    if(MaktabFlag){element.style.display='flex';}
                    else{element.style.display='none';}
                }
    
                else if(FaraDarsCheck){
                    if(FaraDarsFlag){element.style.display='flex';}
                    else{element.style.display='none';}
                }
    
                else if(RoocketCheck){
                    if(RoocketFlag){element.style.display='flex';}
                    else{element.style.display='none';}
                }
    
                else if(SabzLearnCheck){
                    if(SabzLearnFlag){element.style.display='flex';}
                    else{element.style.display='none';}
                }
    
                else if(CourseraCheck){
                    if(CourseraFlag){element.style.display='flex';}
                    else{element.style.display='none';}
                }
    
                else if(YouTubeCheck){
                    if(YouTubeFlag){element.style.display='flex';}
                    else{element.style.display='none';}
                }
                else{
                    element.style.display='none';
                }
            }
        }
        else{
            element.style.display='none';
        }
        
    });
}


