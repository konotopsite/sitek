let classDivs1 = document.querySelector('.classDivs1')
let classDivs2 = document.querySelector('.classDivs2')
let classDivs3 = document.querySelector('.classDivs3')

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
    statRandom150 = 50 + Math.random()*50;
}

function addEigClo(){
var cloudObj = new Cloude(cloud , cnv.width*Math.random() , (10 + Math.random()*450) , statRandom150*2 , statRandom150, 0.2);
cloudsObjsArry.push(cloudObj);
var cloudObj = new Cloude(cloud , -cnv.width*Math.random() , (Math.random()*cnv.height) , statRandom150*2 , statRandom150, 0.8);
cloudsObjsArry.push(cloudObj);
var cloudObj = new Cloude(cloud1 , cnv.width*Math.random() , (0 + Math.random()*450) , statRandom150*2 , statRandom150, 0.3);
cloudsObjsArry.push(cloudObj);
var cloudObj = new Cloude(cloud1 , -cnv.width*Math.random() , (Math.random()*cnv.height) , statRandom150*2 , statRandom150, 0.9);
cloudsObjsArry.push(cloudObj);
var cloudObj = new Cloude(cloud2 , cnv.width*Math.random() , (30 + Math.random()*450) , statRandom150*2 , statRandom150, 0.4);
cloudsObjsArry.push(cloudObj);
var cloudObj = new Cloude(cloud2 , -cnv.width*Math.random() , (Math.random()*cnv.height) , statRandom150*2 , statRandom150, 0.7);
cloudsObjsArry.push(cloudObj);
var cloudObj = new Cloude(cloud3 , cnv.width*Math.random() , (50 + Math.random()*450) , statRandom150*2 , statRandom150, 0.6);
cloudsObjsArry.push(cloudObj);
var cloudObj = new Cloude(cloud3 , -cnv.width*Math.random() , (Math.random()*cnv.height) , statRandom150*2 , statRandom150, 0.3);
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
            cloudFor.y = Math.random()*cnv.height;
            cloudFor.hi = 100 + Math.random()*50;
            cloudFor.wi = cloudFor.hi*2;
            if(window.innerWidth < 451){
                cloudFor.hi = 60 + Math.random()*60;
                cloudFor.wi = cloudFor.hi*2;
            }
            
        }
        ctx.drawImage(cloudFor.imgg, cloudFor.x , cloudFor.y , cloudFor.wi , cloudFor.hi );  
    }
 
 
    tim = setTimeout(draw,40)
    /*requestAnimationFrame(draw)*/
}

cloud3.onload = draw

/*----------------------------------*/

var canva = document.getElementById('stars');
var ctxxx = canva.getContext('2d');
canva.width = classDivs1.clientWidth;
canva.height = classDivs1.clientHeight;
window.onresize = ()=>{
    canva.width = classDivs1.clientWidth;
    canva.height = classDivs1.clientHeight;
}

var timStars;
let colorStars = ['#cdfdff' , '#8efff0', '#fffd8a', '#ffaafb'];
function drawStars() {
    let xx = Math.random()*canva.width;
    let yy = Math.random()*canva.height;
    ctxxx.beginPath();
    ctxxx.fillStyle = colorStars[Math.floor(Math.random()*4)];
    ctxxx.arc(xx, yy, 1, 0, 2 * Math.PI);
    ctxxx.fill();


    timStars = setTimeout(drawStars,150)
}


let counterCanvas = 0;

document.querySelector('.invizBut').onclick = ()=>{
    if( counterCanvas == 0 ){
        ctxxx.clearRect(0,0,cnv.width, cnv.height);
        clearTimeout(tim)
        clearTimeout(timStars)
        draw()
        drawStars()
        canva.style.opacity = 0.6;
        cnv.style.opacity = 0.15;
        classDivs1.style.opacity = 0;
        console.log(counterCanvas)
        counterCanvas = 1;
        console.log(counterCanvas)
        console.log('11111')
        classDivs2.style.filter = 'hue-rotate(-10deg) contrast(85%)';
        classDivs3.style.filter = 'hue-rotate(-10deg) contrast(110%)';
        document.querySelector('.moon').style.display = 'block';
    }
    else{
        counterCanvas = 0;
        cnv.style.opacity = 0.15;
        classDivs1.style.opacity = 1;
        canva.style.opacity = 0;
        clearTimeout(timStars)
        clearTimeout(tim)
        draw()
        classDivs2.style.filter = 'contrast(130%)';
        classDivs3.style.filter = 'contrast(110%)';
        document.querySelector('.moon').style.display = 'none';
    }
   
    
}