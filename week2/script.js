let p = 0;
let pvalue;
let muted = false;

let mic = document.getElementById('micbttn');

console.log(p);

mic.addEventListener('click', function(){
  if(muted){
    muted = false;
    document.getElementById("micpic").src = document.getElementById("micpic").src.replace("Off","On");
    console.log(muted);
  }
  else if(!muted){
    muted = true;
    document.getElementById("micpic").src = document.getElementById("micpic").src.replace("On","Off");
    console.log(muted);
  }
}); 

function changeImage(img) {
    let temp = String(p)+"screen";
    pvalue = String(p+1)+"screen";
    console.log(p);

    if(p<2){
        document.getElementById("meetingImg").src = img.src.replace(temp, pvalue);

        p+=1;

        if(p==1){
            let popupTemp = document.getElementById("popupimg");
            popupTemp.src = popupTemp.src.replace("maingoal","hismango");
            
            popupTemp.style.width = "20%";
            popupTemp.style.top = "10%";
            popupTemp.style.left = "40%";
        } else if(p==2){
            if(muted){
                window.location.reload();
            }
            document.getElementById("popupimg").style.visibility = "hidden";
        }
    }
    else{
        document.getElementById("meeting").style.visibility = "hidden";

        document.getElementById("msg").innerHTML = "<h2>remember to mute yourself...</h2><img src='assets/post.jpeg'><p>click anywhere to restart</p>";
    }
    
}