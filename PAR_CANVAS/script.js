let kord = document.querySelector('.kords')
let canvas = document.querySelector('#par')
let ctx = canvas.getContext('2d');
let tim;


canvas.onmousemove = (e)=>{
    kord.innerHTML = `(>)X:${e.offsetX}  ,Y(^):${e.offsetY}`
}
canvas.width = document.querySelector('.dom').clientWidth
canvas.height = document.querySelector('.dom').clientHeight
console.dir(document.querySelector('.dom'))

var cloud1 = new Image();
var cloud2 = new Image();
var cloud3 = new Image();
cloud1.src = '1p.png';
cloud2.src = '2p.png';
cloud3.src = '3p.png';

function Cloude(imgg, x, y, wi, hi, usk){
    this.imgg = imgg;
    this.x = x;
    this.y = y;
    this.wi = wi;
    this.hi = hi;
    this.usk = usk;
}

var cloudsObjsArry = [];

function addEigClo(){
    var cloudObj = new Cloude(cloud1 , canvas.width/2, canvas.height + Math.floor((Math.random()*canvas.height)/3), 6 , 6 , 2);
    cloudsObjsArry.push(cloudObj);
    var cloudObj = new Cloude(cloud2 , canvas.width/2, canvas.height+Math.floor((canvas.height/3)+((Math.random()*canvas.height)/3)) , 3 , 3 , 2);
    cloudsObjsArry.push(cloudObj);
    var cloudObj = new Cloude(cloud3 , canvas.width/2, canvas.height+Math.floor((canvas.height/3*2)+((Math.random()*canvas.height)/3)) , 6 , 6 , 2);
    cloudsObjsArry.push(cloudObj);
    
    var cloudObj = new Cloude(cloud2 , canvas.width/2, canvas.height + Math.floor((Math.random()*canvas.height)/3), 8 , 8 , 2);
    cloudsObjsArry.push(cloudObj);
    var cloudObj = new Cloude(cloud3 , canvas.width/2, canvas.height+Math.floor((canvas.height/3)+((Math.random()*canvas.height)/3)) , 2 , 2 ,2);
    cloudsObjsArry.push(cloudObj);
    var cloudObj = new Cloude(cloud1 , canvas.width/2, canvas.height+Math.floor((canvas.height/3*2)+((Math.random()*canvas.height)/3)) , 8 , 8 , 2);
    cloudsObjsArry.push(cloudObj);
    
    var cloudObj = new Cloude(cloud3 , canvas.width/2, canvas.height + Math.floor((Math.random()*canvas.height)/3), 8 , 8 , 2);
    cloudsObjsArry.push(cloudObj);
    var cloudObj = new Cloude(cloud1 , canvas.width/2, canvas.height+Math.floor((canvas.height/3)+((Math.random()*canvas.height)/3)) , 10 , 10 , 2);
    cloudsObjsArry.push(cloudObj);
    var cloudObj = new Cloude(cloud2 , canvas.width/2, canvas.height+Math.floor((canvas.height/3*2)+((Math.random()*canvas.height)/3)) , 6 , 6 , 2);
    cloudsObjsArry.push(cloudObj);
    }

    addEigClo();
    addEigClo();
    addEigClo();
    addEigClo();
    addEigClo();
    addEigClo();
    addEigClo();
    addEigClo();
    addEigClo();
    addEigClo();
    addEigClo();
    addEigClo();
    addEigClo();
    addEigClo();
    addEigClo();
    addEigClo();
   
    console.log(cloudsObjsArry);

  
    
function draw() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    for(let i=0; i<cloudsObjsArry.length;i++){
        var cloudFor = cloudsObjsArry[i];
        cloudFor.y = cloudFor.y - cloudFor.usk; 
        if(cloudFor.y < 0){
            cloudFor.y = canvas.height - 10;
            cloudFor.x = canvas.width/2;
            cloudFor.wi =  Math.floor(Math.random()*10)  
        }
        var counterForRand = Math.floor(Math.random()*2)
        if(cloudFor.y < canvas.height - canvas.height/2){
            if(counterForRand == 0){
                cloudFor.wi = cloudFor.wi +0.8;
                cloudFor.hi = cloudFor.wi;
            }
            if(counterForRand == 1){
                cloudFor.wi = cloudFor.wi -0.4;
                cloudFor.hi = cloudFor.wi;
            }
        }
        var counterForRand = Math.floor(Math.random()*2) /*   Generate 0 1  */
        if(cloudFor.y < canvas.height - canvas.height/2){
            if(counterForRand == 0){
                cloudFor.x = cloudFor.x -0.3;
            }
            if(counterForRand == 1){
                cloudFor.x = cloudFor.x + 0.7;
            }
        }

       
        ctx.drawImage(cloudFor.imgg, cloudFor.x , cloudFor.y , cloudFor.wi , cloudFor.hi ); 
       
    }
    tim = setTimeout(draw, 40)
    }


    cloud3.onload = draw
    

    /* 
    function draw() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    for(let i=0; i<cloudsObjsArry.length;i++){
        var cloudFor = cloudsObjsArry[i];
        cloudFor.y = cloudFor.y - cloudFor.usk; 
        if(cloudFor.y < 0){
            cloudFor.y = canvas.height;
            cloudFor.x = canvas.width/2;
            cloudFor.wi =  Math.floor(Math.random()*10)  
        }
        var counterForRand = Math.floor(Math.random()*2)
        if(counterForRand == 0){
            cloudFor.wi = cloudFor.wi +0.7;
            cloudFor.hi = cloudFor.wi;
        }
        if(counterForRand == 1){
            cloudFor.wi = cloudFor.wi -0.4;
            cloudFor.hi = cloudFor.wi;
        }
        var counterForRand = Math.floor(Math.random()*2)  
        if(counterForRand == 0){
            cloudFor.x = cloudFor.x -0.7;
        }
        if(counterForRand == 1){
            cloudFor.x = cloudFor.x + 0.7;
        }
        


        ctx.drawImage(cloudFor.imgg, cloudFor.x , cloudFor.y , cloudFor.wi , cloudFor.hi ); 
       
    }
    tim = setTimeout(draw, 40)
    }

    */