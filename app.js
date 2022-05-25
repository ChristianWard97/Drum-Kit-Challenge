const boomDrum = document.getElementById("drum1");
const kickDrum = document.getElementById("drum2");
const snareDrum = document.getElementById("drum3");
const clapDrum = document.getElementById("drum4");
const openDrum = document.getElementById("drum5");
const tinkDrum = document.getElementById("drum6");
const hiDrum = document.getElementById("drum7");
const rideDrum = document.getElementById("drum8");
const tomDrum = document.getElementById("drum9");

const boom = document.getElementById("boom");
const kick = document.getElementById("kick");
const snare = document.getElementById("snare");
const clap = document.getElementById("clap");
const openhat = document.getElementById("openhat");
const tink = document.getElementById("tink");
const hihat = document.getElementById("hihat");
const ride = document.getElementById("ride");
const tom = document.getElementById("tom");

boomDrum.addEventListener('click', () => {
    boom.play();
    boom.currentTime = 0;
})

kickDrum.addEventListener('click', () => {
    kick.play();
    kick.currentTime = 0;
})

snareDrum.addEventListener(`click`, () =>{
    snare.play();
    snare.currentTime = 0;
})

clapDrum.addEventListener(`click`, () =>{
    clap.play();
    clap.currentTime = 0;
})

openDrum.addEventListener(`click`, () =>{
    openhat.play();
    openhat.currentTime = 0;
})

tinkDrum.addEventListener(`click`, () =>{
    tink.play();
    tink.currentTime = 0;
})

hiDrum.addEventListener(`click`, () =>{
    hihat.play();
    hihat.currentTime = 0;
})

rideDrum.addEventListener(`click`, () =>{
    ride.play();
    ride.currentTime = 0;
})

tomDrum.addEventListener(`click`, () =>{
    tom.play();
    tom.currentTime = 0;
})

document.addEventListener('keydown', (x) => {
    console.log(x);
    if(x.key == "a"){
        boom.play();
        boom.currentTime = 0;
    }
    else if(x.key == "f"){
        kick.play()
        kick.currentTime = 0;
    }
    else if(x.key == "j"){
        snare.play()
        snare.currentTime = 0;
    }
    else if(x.key == "s"){
        clap.play()
        clap.currentTime = 0;
    }
    else if(x.key == "g"){
        openhat.play()
        openhat.currentTime = 0;
    }
    else if(x.key == "k"){
        tink.play()
        tink.currentTime = 0;
    }
    else if(x.key == "d"){
        hihat.play()
        hihat.currentTime = 0;
    }
    else if(x.key == "h"){
        ride.play()
        ride.currentTime = 0;
    }
    else if(x.key == "l"){
        tom.play()
        tom.currentTime = 0;
    }
});