const canvas = document.getElementById("moleculeCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<60;i++){

particles.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*3+2,
dx:(Math.random()-0.5)*0.5,
dy:(Math.random()-0.5)*0.5

});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fillStyle="#4ec7a3";
ctx.fill();

p.x+=p.dx;
p.y+=p.dy;

});

requestAnimationFrame(animate);

}

animate();