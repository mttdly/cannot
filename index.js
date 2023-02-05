let send = document.querySelector('.btn-container');
let btnbtn = document.querySelector('.btn');
setTimeout(() => {
    send.style.transition = '.2s all';
    btnbtn.style.transition = '.2s all';
    send.style.position = 'absolute';
}, 1000);



function moveButton(btn) {
    btn.style.left = `${Math.floor(Math.random() * (9 - 2 + 1))}60px`;
    btn.style.right  = `${Math.floor(Math.random() * (9 - 2 + 1))}60px`;
    btn.style.bottom   = `${Math.floor(Math.random() * (200 - 80 + 1) + 50)}px`;
    btn.style.top   = `${Math.floor(Math.random() * (350 - 80 + 1) + 50)}px`;
}

function winner() {
    alert("Congratulations! You touched this!");
}

