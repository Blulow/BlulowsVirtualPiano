let octaves = [4, 4];

let piano = document.getElementById('piano');
let ksall = document.getElementById('keys');
let ks1 = document.getElementById('ks1');
let ks2 = document.getElementById('ks2');
let keysets = [ks1, ks2];

let octaveLeft = document.querySelectorAll('.left');
let octaveRight = document.querySelectorAll('.right');

let add = document.getElementById('add');
add.onclick = () => {
    let ksnew = addPiano(keysets.length + 1);
    keysets.push(ksnew);
    octaves.push(4);
    octaveLeft = document.querySelectorAll('.left');
    octaveRight = document.querySelectorAll('.right');
    changeOctave(ksnew, 2);
    updateClickEvents();
    updatePianoRemove();
    updateConfigBtns();
    addConfigData();
}

function addPiano(nPiano) {
    let ksHTML = `<ul>
                    <li class="key w C">
                        <div></div>
                    </li>
                    <li class="key b Cs">
                        <div></div>
                    </li>
                    <li class="key w D">
                        <div></div>
                    </li>
                    <li class="key b Ds">
                        <div></div>
                    </li>
                    <li class="key w E">
                        <div></div>
                    </li>
                    <li class="key w F">
                        <div></div>
                    </li>
                    <li class="key b Fs">
                        <div></div>
                    </li>
                    <li class="key w G">
                        <div></div>
                    </li>
                    <li class="key b Gs">
                        <div></div>
                    </li>
                    <li class="key w A">
                        <div></div>
                    </li>
                    <li class="key b As">
                        <div></div>
                    </li>
                    <li class="key w B">
                        <div></div>
                    </li>
                </ul>
                <div id="buttons">    
                    <button class="config">
                        <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 32 32">
                            <path d="M 13.1875 3 L 13.03125 3.8125 L 12.4375 6.78125 C 11.484375 7.15625 10.625 7.683594 9.84375 8.3125 L 6.9375 7.3125 L 6.15625 7.0625 L 5.75 7.78125 L 3.75 11.21875 L 3.34375 11.9375 L 3.9375 12.46875 L 6.1875 14.4375 C 6.105469 14.949219 6 15.460938 6 16 C 6 16.539063 6.105469 17.050781 6.1875 17.5625 L 3.9375 19.53125 L 3.34375 20.0625 L 3.75 20.78125 L 5.75 24.21875 L 6.15625 24.9375 L 6.9375 24.6875 L 9.84375 23.6875 C 10.625 24.316406 11.484375 24.84375 12.4375 25.21875 L 13.03125 28.1875 L 13.1875 29 L 18.8125 29 L 18.96875 28.1875 L 19.5625 25.21875 C 20.515625 24.84375 21.375 24.316406 22.15625 23.6875 L 25.0625 24.6875 L 25.84375 24.9375 L 26.25 24.21875 L 28.25 20.78125 L 28.65625 20.0625 L 28.0625 19.53125 L 25.8125 17.5625 C 25.894531 17.050781 26 16.539063 26 16 C 26 15.460938 25.894531 14.949219 25.8125 14.4375 L 28.0625 12.46875 L 28.65625 11.9375 L 28.25 11.21875 L 26.25 7.78125 L 25.84375 7.0625 L 25.0625 7.3125 L 22.15625 8.3125 C 21.375 7.683594 20.515625 7.15625 19.5625 6.78125 L 18.96875 3.8125 L 18.8125 3 Z M 14.8125 5 L 17.1875 5 L 17.6875 7.59375 L 17.8125 8.1875 L 18.375 8.375 C 19.511719 8.730469 20.542969 9.332031 21.40625 10.125 L 21.84375 10.53125 L 22.40625 10.34375 L 24.9375 9.46875 L 26.125 11.5 L 24.125 13.28125 L 23.65625 13.65625 L 23.8125 14.25 C 23.941406 14.820313 24 15.402344 24 16 C 24 16.597656 23.941406 17.179688 23.8125 17.75 L 23.6875 18.34375 L 24.125 18.71875 L 26.125 20.5 L 24.9375 22.53125 L 22.40625 21.65625 L 21.84375 21.46875 L 21.40625 21.875 C 20.542969 22.667969 19.511719 23.269531 18.375 23.625 L 17.8125 23.8125 L 17.6875 24.40625 L 17.1875 27 L 14.8125 27 L 14.3125 24.40625 L 14.1875 23.8125 L 13.625 23.625 C 12.488281 23.269531 11.457031 22.667969 10.59375 21.875 L 10.15625 21.46875 L 9.59375 21.65625 L 7.0625 22.53125 L 5.875 20.5 L 7.875 18.71875 L 8.34375 18.34375 L 8.1875 17.75 C 8.058594 17.179688 8 16.597656 8 16 C 8 15.402344 8.058594 14.820313 8.1875 14.25 L 8.34375 13.65625 L 7.875 13.28125 L 5.875 11.5 L 7.0625 9.46875 L 9.59375 10.34375 L 10.15625 10.53125 L 10.59375 10.125 C 11.457031 9.332031 12.488281 8.730469 13.625 8.375 L 14.1875 8.1875 L 14.3125 7.59375 Z M 16 11 C 13.25 11 11 13.25 11 16 C 11 18.75 13.25 21 16 21 C 18.75 21 21 18.75 21 16 C 21 13.25 18.75 11 16 11 Z M 16 13 C 17.667969 13 19 14.332031 19 16 C 19 17.667969 17.667969 19 16 19 C 14.332031 19 13 17.667969 13 16 C 13 14.332031 14.332031 13 16 13 Z"></path>
                        </svg>
                        <span id="configtt">Configure Piano Settings</span>
                    </button>
                    <button class="remove">
                        -
                        <span id="removett">Remove Piano</span>
                    </button>
                    <div id="octave">
                        <button class="left">&lt;</button>
                        <span id="octavelabel">Octave: </span>
                        <button class="right">&gt;</button>
                    </div>
                </div>`
    let ks = document.createElement('div');
    ks.className = 'keyset';
    ks.id = 'ks' + nPiano;
    ks.innerHTML = ksHTML;

    let divider = document.createElement('div');
    divider.id = 'divider';

    ksall.appendChild(divider);
    ksall.appendChild(ks);

    return ks;
}

function updatePianoRemove() {
    if (keysets.length === 2) {
        piano.style.width = '50%';
    }
    if (keysets.length === 3) {
        piano.style.width = '65%';
        add.style.backgroundColor = '#111111';
        add.style.borderColor = '#000000';
        add.style.pointerEvents = 'all';
    }
    if (keysets.length === 4) {
        piano.style.width = '80%';
        add.style.backgroundColor = '#550000';
        add.style.borderColor = '#220000';
        add.style.pointerEvents = 'none';
    }

    for (i = 0; i < ksall.children.length; i += 2) {
        ksall.children[i].id = 'ks' + (i/2 + 1);
    }
}

function changeOctave(piano, dir) {
    let pianoN = parseInt(piano.id[piano.id.length - 1]) - 1;
    if (dir === 0) {
        if (octaves[pianoN] - 1 >= 0) octaves[pianoN]--;
    } else if (dir === 1) {
        if (octaves[pianoN] + 1 <= 8) octaves[pianoN]++;
    }
    piano.querySelector('#octavelabel').innerText = 'Octave: ' + octaves[pianoN];
}

window.onload = () => {
    changeOctave(ks1, 2);
    changeOctave(ks2, 2);
}

let config = [
    ['z', 's', 'x', 'd', 'c', 'v', 'g', 'b', 'h', 'n', 'j', 'm'],
    ['r', '5', 't', '6', 'y', 'u', '8', 'i', '9', 'o', '0', 'p']
];

Array.from(ksall.children).forEach(e => {
    if(Array.from(ksall.children).indexOf(e) % 2 === 1) {
        return;
    }
    let pianoN = parseInt(e.id[e.id.length - 1]) - 1;
    Array.from(e.children[0].children).forEach(f => {
        f.children[0].innerText = config[pianoN][Array.from(e.children[0].children).indexOf(f)];
    })
});

function addConfigData() {
    config.push(Array(12).fill(''));
}

function removeConfigData(piano) {
    let pianoN = parseInt(piano.id[piano.id.length - 1]) - 1;
    config.splice(pianoN, 1);
}

let pianoFocus = null;

function updateConfigBtns() {
    let configbtn = document.querySelectorAll('.config');
    let configmenu = document.getElementById('configmenu');
    let configlabel = document.getElementById('configlabel');

    configbtn.forEach(e => {
        e.onclick = () => {
            pianoFocus = e.parentNode.parentNode;
            let pianoN = parseInt(pianoFocus.id[pianoFocus.id.length - 1]) - 1;
            Array.from(configmenu.children[1].children[2].children).forEach(f => {
                f.innerText = config[pianoN][Array.from(configmenu.children[1].children[2].children).indexOf(f)];
            });
            configlabel.innerText = 'Piano ' + (pianoN + 1);
            
            configmenu.style.visibility = 'visible';
        }
    });
}
updateConfigBtns();

let closebtn = document.getElementById('close');
closebtn.onclick = () => {
    pianoFocus = null;
    configmenu.style.visibility = 'hidden';
}

let keyc = document.querySelectorAll('.keyc');
keyc.forEach(e => {
    e.addEventListener('input', () => {
        if (e.innerText.length <= 1) {
            let pianoN = parseInt(pianoFocus.id[pianoFocus.id.length - 1]) - 1;
            config[pianoN][Array.from(e.parentNode.children).indexOf(e)] = e.innerText;
            pianoFocus.children[0].children[Array.from(e.parentNode.children).indexOf(e)].children[0].innerText = e.innerText;
        }
    });
});

function updateClickEvents() {
    octaveLeft.forEach(e => {
        e.onclick = () => {
            let piano = e.parentNode.parentNode.parentNode;
            changeOctave(piano, 0);
        }
    });
    octaveRight.forEach(e => {
        e.onclick = () => {
            let piano = e.parentNode.parentNode.parentNode;
            changeOctave(piano, 1);
        }
    });

    let remove = document.querySelectorAll('.remove');
    remove.forEach(g => {
        g.onclick = () => {
            let piano = g.parentNode.parentNode;
            let pianoN = parseInt(piano.id[piano.id.length - 1]) - 1;

            keysets.splice(pianoN, 1);
            octaves.splice(pianoN, 1);
            ksall.removeChild(piano.parentNode.children[pianoN * 2 - 1]);
            ksall.removeChild(piano);

            updatePianoRemove();
            removeConfigData(piano);
        }
    });
    
    updateKeys();
}
updateClickEvents();

function updateKeys() {
    let keys = document.querySelectorAll('.key');

    keys.forEach(e => {
        function handleKeyDown() {
            let piano = e.parentNode.parentNode;
            let pianoN = parseInt(piano.id[piano.id.length - 1]) - 1;
            let octave = octaves[pianoN];
            let note = e.classList[e.classList.length - 1];
            
            let pitch = note + octave;
            playPitch(pitch);
        }
        
        if (e.dataset.haveEventListeners == null || e.dataset.haveEventListeners === false) {
            e.addEventListener('mousedown', handleKeyDown);
            e.dataset.haveEventListeners = true;
        }
    });
}

window.addEventListener('keydown', f => {
    if (f.repeat) {
        return;
    }

    let keys = document.querySelectorAll('.key');

    keys.forEach(e => {
        function handleKeyDown() {
            let piano = e.parentNode.parentNode;
            let pianoN = parseInt(piano.id[piano.id.length - 1]) - 1;
            let octave = octaves[pianoN];
            let note = e.classList[e.classList.length - 1];
            
            let pitch = note + octave;
            playPitch(pitch);
        }

        let piano = e.parentNode.parentNode;
        let pianoN = parseInt(piano.id[piano.id.length - 1]) - 1;
        if (f.key === config[pianoN][Array.from(keys).indexOf(e) % 12]) {
            if (e.classList.contains('w')) {
                e.children[0].classList.add('activew');
                e.children[0].style.hover
            } else if (e.classList.contains('b')) {
                e.children[0].classList.add('activeb');
            }
            
            handleKeyDown(e);
        }
    });
});

window.addEventListener('keyup', f => {
    if (f.repeat) {
        return;
    }

    let keys = document.querySelectorAll('.key');

    keys.forEach(e => {
        let piano = e.parentNode.parentNode;
        let pianoN = parseInt(piano.id[piano.id.length - 1]) - 1;
        if (f.key === config[pianoN][Array.from(keys).indexOf(e) % 12]) {
            if (e.classList.contains('w')) {
                e.children[0].classList.remove('activew');
            } else if (e.classList.contains('b')) {
                e.children[0].classList.remove('activeb');
            }
        }
    });
});

function playPitch(pitch) {
    let audio = new Audio('keysounds/' + pitch + '.ogg');
    audio.play();
    let fadeOut = setInterval(() => {
        if (audio.volume >= 0.1) {
            audio.volume -= audio.volume / (1000 / 50);
        } else if (audio.volume < 0.1) {
            audio.volume = 0;
            audio.pause();
            clearInterval(fadeOut);
        }
    }, 50);
}