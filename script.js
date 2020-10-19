let classDivs1 = document.querySelector('.classDivs1')
let classDivs2 = document.querySelector('.classDivs2')
let classDivs3 = document.querySelector('.classDivs3')
let absoluteGrey = document.querySelector('.absoluteGrey')
let nadp = document.querySelector('.nadp')
let blo = document.querySelector('.blo')
let hh2 = document.querySelector('.hh2')
let containerL = document.querySelector('.containerL')
let containerR = document.querySelector('.containerR')
let twoContainers = document.querySelector('.twoContainers')
let scrollPosition = 0;


function maxwid() {
    scrollPosition = window.pageYOffset;
    classDivs2.style.transform = 'translateY('+(scrollPosition/9-8)+'px)';
    classDivs3.style.transform = 'translateY('+(scrollPosition/22)+'px)';
    blo.style.transform = 'translateY('+(scrollPosition/22)+'px)';
    absoluteGrey.style.opacity = 0 + scrollPosition/900;
    nadp.style.opacity = 0.6 - scrollPosition/1000;
    nadp.style.transform = 'translateY('+(scrollPosition/5)+'px)';
    console.log(scrollPosition)
    hh2.style.opacity = 0.3 + scrollPosition/1000;
    if(scrollPosition < 800 ) {
        containerL.style.transform = 'translateX('+(-10 + scrollPosition/18)+'px)';
        containerR.style.transform = 'translateX('+(10 - scrollPosition/18)+'px)';
        twoContainers.style.opacity = 0.3 + scrollPosition/1000;
    }
}
function max1200() {
    scrollPosition = window.pageYOffset;
    classDivs2.style.transform = 'translateY('+(scrollPosition/9-8)+'px)';
    classDivs3.style.transform = 'translateY('+(scrollPosition/22)+'px)';
    blo.style.transform = 'translateY('+(scrollPosition/22)+'px)';
    absoluteGrey.style.opacity = 0 + scrollPosition/900;
    nadp.style.opacity = 0.8 - scrollPosition/1000;
    nadp.style.transform = 'translateY('+(scrollPosition/5)+'px)';
    console.log(scrollPosition)
    hh2.style.opacity = 0.3 + scrollPosition/1000;
    if(scrollPosition < 600 ) {
        containerL.style.transform = 'translateX('+(-70 + scrollPosition/7)+'px)';
        containerR.style.transform = 'translateX('+(70 - scrollPosition/7)+'px)';
        twoContainers.style.opacity = 0.3 + scrollPosition/1000;
    }
}
function max900() {
    scrollPosition = window.pageYOffset;
    classDivs2.style.transform = 'translateY('+(scrollPosition/9-8)+'px)';
    classDivs3.style.transform = 'translateY('+(scrollPosition/22)+'px)';
    blo.style.transform = 'translateY('+(scrollPosition/22)+'px)';
    absoluteGrey.style.opacity = 0 + scrollPosition/900;
    nadp.style.opacity = 0.8 - scrollPosition/1000;
    nadp.style.transform = 'translateY('+(scrollPosition/5)+'px)';
    console.log(scrollPosition)
    hh2.style.opacity = 0.3 + scrollPosition/1000;
    if(scrollPosition < 600 ) {
        containerL.style.transform = 'translateX('+(-60 + scrollPosition/9)+'px)';
        containerR.style.transform = 'translateX('+(60 - scrollPosition/9)+'px)';
        twoContainers.style.opacity = 0.3 + scrollPosition/1000;
    }
}
function max750() {
    scrollPosition = window.pageYOffset;
    classDivs2.style.transform = 'translateY('+(scrollPosition/9-8)+'px)';
    classDivs3.style.transform = 'translateY('+(scrollPosition/22)+'px)';
    blo.style.transform = 'translateY('+(scrollPosition/22)+'px)';
    absoluteGrey.style.opacity = 0 + scrollPosition/900;
    nadp.style.opacity = 0.8 - scrollPosition/1000;
    nadp.style.transform = 'translateY('+(scrollPosition/5)+'px)';
    console.log(scrollPosition)
    hh2.style.opacity = 0.3 + scrollPosition/1000;
    if(scrollPosition < 700 ) {
        containerL.style.transform = 'translateY(-'+(scrollPosition/14)+'px)';
        containerR.style.transform = 'translateY(-'+(scrollPosition/14)+'px)';
        twoContainers.style.opacity = 0.3 + scrollPosition/1000;
    }
}
function max450() {
    scrollPosition = window.pageYOffset;
    classDivs2.style.transform = 'translateY('+(scrollPosition/9-8)+'px)';
    classDivs3.style.transform = 'translateY('+(scrollPosition/22)+'px)';
    blo.style.transform = 'translateY('+(scrollPosition/22)+'px)';
    absoluteGrey.style.opacity = 0 + scrollPosition/900;
    nadp.style.opacity = 0.8 - scrollPosition/1000;
    nadp.style.transform = 'translateY('+(scrollPosition/5)+'px)';
    console.log(scrollPosition)
    hh2.style.opacity = 0.3 + scrollPosition/1000;
    if(scrollPosition < 600 ) {
        containerL.style.transform = 'translateY(-'+(scrollPosition/14)+'px)';
        containerR.style.transform = 'translateY(-'+(scrollPosition/14)+'px)';
        twoContainers.style.opacity = 0.3 + scrollPosition/1000;
    }
}

function paralaxx(e) {
    if(window.innerWidth > 1199){
        maxwid()
        console.log('1200>')
        console.log(window)
        
    }
    if(window.innerWidth < 1200 && window.innerWidth > 899) {
        max1200()
        console.log('max1200')
        
    }
    if(window.innerWidth < 900 && window.innerWidth > 749) {
        max900()
        console.log('max900')
        
    }
    if(window.innerWidth < 750 && window.innerWidth > 450) {
        max750()
        console.log('max750')
        
    }
    if(window.innerWidth < 451) {
        max450()
        console.log('max450')
        
    }
}



addEventListener('scroll', paralaxx)


/*-----------------*/
var cnv = document.getElementById('clouds');
var ctx = cnv.getContext('2d');
cnv.width = classDivs1.clientWidth;
cnv.height = classDivs1.clientHeight;
window.onresize = ()=>{
    cnv.width = classDivs1.clientWidth;
    cnv.height = classDivs1.clientHeight;
}

var tim;

var cloud = new Image();
var cloud1 = new Image();
var cloud2 = new Image();
var cloud3 = new Image();
cloud.src = 'cloud1.png';
cloud1.src = 'cloud2.png';
cloud2.src = 'cloud3.png';
cloud3.src = 'cloud4.png';

function Cloude(imgg, x, y, wi, hi, usk){
    this.imgg = imgg;
    this.x = x;
    this.y = y;
    this.wi = wi;
    this.hi = hi;
    this.usk = usk;
}

var cloudsObjsArry = [];

let statRandom150 = 0;
if(window.innerWidth > 1199){
    statRandom150 = 150 + Math.random()*30;
}
if(window.innerWidth < 1200 && window.innerWidth > 899){
    statRandom150 = 100 + Math.random()*30;
}
if(window.innerWidth < 750 && window.innerWidth > 450) {
    statRandom150 = 50 + Math.random()*30;
}
if(window.innerWidth < 451){
    statRandom150 = 30 + Math.random()*30;
}

function addEigClo(){
var cloudObj = new Cloude(cloud , cnv.width*Math.random() , (10 + Math.random()*450) , statRandom150*2 , statRandom150, 0.2);
cloudsObjsArry.push(cloudObj);
var cloudObj = new Cloude(cloud , -cnv.width*Math.random() , (10 + Math.random()*450) , statRandom150*2 , statRandom150, 0.8);
cloudsObjsArry.push(cloudObj);
var cloudObj = new Cloude(cloud1 , cnv.width*Math.random() , (0 + Math.random()*450) , statRandom150*2 , statRandom150, 0.3);
cloudsObjsArry.push(cloudObj);
var cloudObj = new Cloude(cloud1 , -cnv.width*Math.random() , (0 + Math.random()*450) , statRandom150*2 , statRandom150, 0.9);
cloudsObjsArry.push(cloudObj);
var cloudObj = new Cloude(cloud2 , cnv.width*Math.random() , (30 + Math.random()*450) , statRandom150*2 , statRandom150, 0.4);
cloudsObjsArry.push(cloudObj);
var cloudObj = new Cloude(cloud2 , -cnv.width*Math.random() , (30 + Math.random()*450) , statRandom150*2 , statRandom150, 0.7);
cloudsObjsArry.push(cloudObj);
var cloudObj = new Cloude(cloud3 , cnv.width*Math.random() , (50 + Math.random()*450) , statRandom150*2 , statRandom150, 0.6);
cloudsObjsArry.push(cloudObj);
var cloudObj = new Cloude(cloud3 , -cnv.width*Math.random() , (50 + Math.random()*450) , statRandom150*2 , statRandom150, 0.3);
cloudsObjsArry.push(cloudObj);
console.log(statRandom150)
}
/*------*/

addEigClo()
addEigClo()
addEigClo()
addEigClo()
addEigClo()
addEigClo()
addEigClo()
addEigClo()
addEigClo()







function draw() {
    ctx.clearRect(0,0,cnv.width, cnv.height);
    for(let i=0; i<cloudsObjsArry.length;i++){
        let cloudFor = cloudsObjsArry[i];
        cloudFor.x=cloudFor.x + cloudFor.usk;
        if(cloudFor.x > cnv.width){
            cloudFor.x = -300;
            cloudFor.y = 70.5 + Math.random()*cnv.height/2;
            cloudFor.hi = 100 + Math.random()*50;
            cloudFor.wi = cloudFor.hi*2;
            if(window.innerWidth < 451){
                cloudFor.hi = 50 + Math.random()*50;
                cloudFor.wi = cloudFor.hi*2;
            }
            console.log(cloudFor.wi)
            console.log(cloudFor.hi)
        }
        ctx.drawImage(cloudFor.imgg, cloudFor.x , cloudFor.y , cloudFor.wi , cloudFor.hi );  
    }
 
   console.log('232')
    tim = setTimeout(draw,40)
    /*requestAnimationFrame(draw)*/
}

cloud3.onload = draw