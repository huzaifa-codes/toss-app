var head=document.querySelector("#head-btn"); 

var tail=document.querySelector("#tail-btn"); 

var headings=document.querySelector("#output")

var img=document.querySelector("#img")

var num; 

function flip(coin){
    num=Math.ceil(Math.random(num)*2);

    if(num===1 && coin===1 || num===2 && coin===2){
        console.log("You won the Toss");
        headings.innerHTML="You won the Toss"
        
    }
    else{
        console.log("You lost the Toss");
        headings.innerHTML="You lost the Toss";
        
    }
    
if(num===1){
    console.log("Its a Heads");
}
else if(num===2){
    console.log("Its a Tails");
    
}

if(num===1){
    img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCWlKnx9xe8M7gpkgUSX8qfqlSx4AqYz_KfQ&s" ;
}
else if(num===2){
    
    img.src=".gstatic.com/images?q=tbn:ANd9GcSRl9lhhW64ytNSgLqTJ7JEsBGcvOlMDryaVqjwbToqq2B9A8pcUI1SSo2EDXqiuOAc-fU&usqp=CAU"
}


}
