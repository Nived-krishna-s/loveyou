// =====================

const birthdayName="Sweetheart ❤️";

document.getElementById("name").innerHTML=birthdayName;

// =====================
const popSound = new Audio("assets/sounds/pop.mp3");//popsound
// YES BUTTON

const welcome = document.getElementById("welcome");
const balloonScene = document.getElementById("balloonScene");

document.getElementById("yesBtn").onclick = () => {

    // Prevent double click
    document.getElementById("yesBtn").disabled = true;

    // Welcome slides up
    welcome.style.transition =
        "transform 1.4s ease, opacity 1.4s ease";

    welcome.style.transform = "translateY(-100%)";
    welcome.style.opacity = "0";

    // Balloon page prepares
    balloonScene.style.display = "flex";
    balloonScene.style.visibility = "visible";

    setTimeout(() => {

        welcome.style.display = "none";

        balloonScene.style.transition = "opacity 1s ease";

        balloonScene.style.opacity = "1";

    }, 1400);

};

// =====================

// NO BUTTON

const no=document.getElementById("noBtn");

document.addEventListener("mousemove",(e)=>{

const rect=no.getBoundingClientRect();

const distance=Math.hypot(

e.clientX-(rect.left+rect.width/2),

e.clientY-(rect.top+rect.height/2)

);

if(distance<120){

no.style.position="fixed";

no.style.left=Math.random()*(window.innerWidth-150)+"px";

no.style.top=Math.random()*(window.innerHeight-70)+"px";

}

});

// =====================

// FLOATING HEARTS

const heartContainer=document.getElementById("heartContainer");

setInterval(()=>{

const h=document.createElement("div");

h.className="heart";

h.innerHTML="❤";

h.style.left=Math.random()*100+"vw";

h.style.fontSize=15+Math.random()*30+"px";

h.style.animationDuration=6+Math.random()*5+"s";

heartContainer.appendChild(h);

setTimeout(()=>{

h.remove();

},12000);

},350);

// =====================

// SPARKLES

const sparkles=document.getElementById("sparkles");

for(let i=0;i<80;i++){

const s=document.createElement("div");

s.className="sparkle";

s.style.left=Math.random()*100+"vw";

s.style.top=Math.random()*100+"vh";

s.style.animationDelay=Math.random()*2+"s";

sparkles.appendChild(s);

}
// ---------- BALLOONS ----------

const balloons=document.querySelectorAll(".popBalloon");

const wordBox=document.getElementById("wordContainer");

let popped=0;

balloons.forEach(balloon=>{

balloon.onclick=()=>{

popSound.currentTime=0;
popSound.play();

if(balloon.classList.contains("done")) return;

balloon.classList.add("done");

balloon.classList.add("pop");

// POP SOUND
// We'll add sound later

const word=document.createElement("div");

word.className="word";

word.innerHTML=balloon.dataset.word;

wordBox.appendChild(word);

screenShake();

createParticles(balloon);

popped++;

if(popped===4){

setTimeout(()=>{

wordBox.innerHTML=

"<div class='word'>My heart smiles because of you ❤️</div>";

document.getElementById("continueBtn").style.display="block";

confettiRain();

},1000);

}

};

});
function screenShake(){

document.body.animate([

{transform:"translateX(-8px)"},

{transform:"translateX(8px)"},

{transform:"translateX(-6px)"},

{transform:"translateX(6px)"},

{transform:"translateX(0)"}

],{

duration:300

});

}
function createParticles(balloon){

const rect = balloon.getBoundingClientRect();

for(let i=0;i<40;i++){

const p=document.createElement("div");

p.style.position="fixed";

p.style.left=rect.left+60+"px";

p.style.top=rect.top+60+"px";

p.style.width=4+Math.random()*8+"px";

p.style.height=p.style.width;

p.style.borderRadius="50%";

p.style.pointerEvents="none";

p.style.background=

`hsl(${Math.random()*360},100%,70%)`;

document.body.appendChild(p);

const x=(Math.random()-.5)*450;

const y=(Math.random()-.5)*450;

const rotate=Math.random()*720;

p.animate([

{

transform:"translate(0,0) scale(1)",

opacity:1

},

{

transform:`translate(${x}px,${y}px)
rotate(${rotate}deg)
scale(0)`,

opacity:0

}

],{

duration:1000,

easing:"cubic-bezier(.2,.8,.2,1)"

});

setTimeout(()=>{

p.remove();

},1000);

}


}
function confettiRain(){

for(let i=0;i<120;i++){

const c=document.createElement("div");

c.style.position="fixed";

c.style.width="8px";

c.style.height="15px";

c.style.background=

`hsl(${Math.random()*360},100%,60%)`;

c.style.left=Math.random()*100+"vw";

c.style.top="-20px";

document.body.appendChild(c);

c.animate([

{

transform:"translateY(0) rotate(0deg)"

},

{

transform:`translateY(${window.innerHeight+80}px)
rotate(700deg)`

}

],{

duration:3000+Math.random()*2000,

fill:"forwards"

});

setTimeout(()=>c.remove(),5000);

}

}
function createFireflies(){

const container=document.querySelector(".fireflies");

for(let i=0;i<35;i++){

const f=document.createElement("div");

f.className="firefly";

f.style.left=Math.random()*100+"vw";

f.style.top=Math.random()*100+"vh";

f.style.animationDelay=Math.random()*4+"s";

container.appendChild(f);

}

}

createFireflies();
const flame=document.getElementById("flame");

document.getElementById("blowBtn").onclick=()=>{

flame.animate([

{

transform:"translateX(-50%) scale(1)"

},

{

transform:"translateX(-50%) scale(0)"

}

],{

duration:500,

fill:"forwards"

});

setTimeout(()=>{

flame.style.display="none";

magicEnding();

},600);

}
function magicEnding(){

confettiRain();

document.body.animate([

{

filter:"brightness(1)"

},

{

filter:"brightness(1.4)"

},

{

filter:"brightness(1)"

}

],{

duration:1200

});

}
// -------------------------------
// CONTINUE TO CAKE SCENE
// -------------------------------

const continueBtn = document.getElementById("continueBtn");
const cakeScene = document.getElementById("cakeScene");

continueBtn.onclick = () => {

    // Fade out balloon scene
    balloonScene.style.transition =
        "opacity 1.2s ease, transform 1.2s ease";

    balloonScene.style.opacity = "0";
    balloonScene.style.transform = "translateY(-100px)";

    setTimeout(() => {

        balloonScene.style.display = "none";

        // Show cake scene
        cakeScene.style.display = "flex";
        cakeScene.style.visibility = "visible";

        // Small delay so display is applied
        setTimeout(() => {
            cakeScene.style.transition =
                "opacity 1.5s ease";
            cakeScene.style.opacity = "1";
        }, 50);

    }, 1200);

};
document.querySelectorAll(".popBalloon").forEach(balloon=>{
    balloon.animate([
        {transform:"translateY(0)"},
        {transform:"translateY(-150vh)",opacity:0}
    ],{
        duration:1800,
        easing:"ease-in"
    });
});
document.body.style.background=
"linear-gradient(#1f1742,#120c2d)";
for(let i=0;i<250;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

document.body.appendChild(star);

}
function showCakeScene(){

    cakeScene.style.display="flex";
    cakeScene.style.visibility="visible";

    cakeScene.animate([
        {
            opacity:0,
            transform:"translateY(120px)"
        },
        {
            opacity:1,
            transform:"translateY(0)"
        }
    ],{
        duration:1800,
        easing:"ease-out",
        fill:"forwards"
    });

}
const nightSky = document.querySelector(".nightSky");

for(let i=0;i<150;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";
    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=Math.random()*3+"s";

    nightSky.appendChild(star);

}
const blowBtn = document.getElementById("blowBtn");

blowBtn.onclick = ()=>{

    flame.animate([

        {
            transform:"translateX(-50%) rotate(0deg)"
        },

        {
            transform:"translateX(-50%) rotate(-35deg)"
        },

        {
            transform:"translateX(-50%) scale(0)"
        }

    ],{

        duration:700,
        fill:"forwards"

    });

    setTimeout(()=>{

        flame.remove();

        createSmoke();

    },700);

};
function createSmoke(){

    for(let i=0;i<12;i++){

        const smoke=document.createElement("div");

        smoke.className="smoke";

        document.body.appendChild(smoke);

        smoke.style.left=(window.innerWidth/2-10)+"px";
        smoke.style.top=(window.innerHeight/2-130)+"px";

        smoke.animate([

            {
                transform:"translateY(0) scale(.4)",
                opacity:.8
            },

            {
                transform:`translateY(-${150+Math.random()*80}px)
                           translateX(${Math.random()*80-40}px)
                           scale(2.2)`,
                opacity:0
            }

        ],{

            duration:2500,

            easing:"ease-out"

        });

        setTimeout(()=>smoke.remove(),2500);

    }

    setTimeout(showBouquetScene,2200);

}
