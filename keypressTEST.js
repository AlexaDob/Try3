
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    
    if(keyPressed == '68') {
        play_aKey();
        console.log("A key");
    }

    if(keyPressed == '70') {
        play_bKey();
        console.log("B Key");
    }

    if(keyPressed == '71') {
        play_cKey();
        console.log("C Key");
    }

    if(keyPressed == '72') {
        play_dKey();
        console.log("D key");
    }

    if(keyPressed == '73') {
        play_eKey();
        console.log("E Key");
    }

    if(keyPressed == '74') {
        play_fKey();
        console.log("Fdf Key");
    }

    if(keyPressed == '75') {
        play_gKey();
        console.log("G Key");
    }
}

function play_aKey(){
    var audio = new Audio('A.wav');
    audio.play();
}

function play_bKey(){
    var audio = new Audio('B.wav');
    audio.play();
}

function play_cKey(){
    var audio = new Audio('C.wav');
    audio.play();
}

function play_dKey(){
    var audio = new Audio('D.wav');
    audio.play();
}

function play_eKey(){
    var audio = new Audio('E.wav');
    audio.play();
}

function play_fKey(){
    var audio = new Audio('F.wav');
    audio.play();
}

function play_gKey(){
    var audio = new Audio('G.wav');
    audio.play();
}