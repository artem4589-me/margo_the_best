/* https://greensock.com/gsap */
TweenLite.set("#petals", { perspective:600 })
TweenLite.set("img", { xPercent:"-50%", yPercent:"-50%" })

var total = 50;
var warp = document.getElementById("petals"),
    w = window.innerWidth,
    h = window.innerHeight;

for (i = 0; i < total; i++) {
    var Div = document.createElement('div');
    TweenLite.set(Div, { attr: { class:'dot' }, x:R(0,w), y:R(-200,-150), z:R(-200,200)});
    warp.appendChild(Div);
    animm(Div);
}

function animm(elm) {
    TweenMax.to(elm,R(6,15), { y:h+100, ease:Linear.easeNone, repeat:-1, delay:-15 });
    TweenMax.to(elm,R(4,8), { x:'+=100', rotationZ:R(0,180), repeat:-1, yoyo:true, ease:Sine.easeInOut });
    TweenMax.to(elm,R(2,8), { rotationX:R(0,360), rotationY:R(0,360), repeat:-1, yoyo:true, ease:Sine.easeInOut, delay:-5 });
};

function R(min,max) { return min+Math.random() * (max-min) };

/* https://mattboldt.com/typed.js/ */
setTimeout(() => {
    var typed = new Typed('#text', {
        strings: ['💖 Моя дорогая Марго! 💖 С 8 Марта, моя прекрасная, нежная и удивительная девушка! 🌸✨ Хоть между нами километры, наша любовь сильнее любых расстояний. Мы встретились в игре, но теперь ты – моя самая настоящая реальность. 💕 Ты согреваешь мою душу, наполняешь сердце радостью и даришь мне вдохновение каждый день.'],
        typeSpeed: 50,
        backSpeed: 0,
        fadeOut: true,
        loop: false,
        showCursor: false,
        onComplete: function() {
            var author = document.getElementById("author");
            author.style.opacity = 1;
            showFirstButton();
        }
    });
}, 3000);

function showFirstButton() {
    var button1 = document.createElement("button");
    button1.innerText = "Тикни на меня!";
    button1.id = "changeTextBtn1";
    button1.style.display = "block";
    button1.style.margin = "20px auto";
    button1.onclick = function() {
        button1.remove();
        changeTextSecond();
    };
    document.querySelector(".card").appendChild(button1);
}

function changeTextSecond() {
    var typed = new Typed('#text', {
        strings: ['Ты – самое прекрасное, что случилось со мной. Я мечтаю о том моменте, когда смогу обнять тебя по-настоящему, почувствовать тепло твоих рук и заглянуть в твои глаза без экрана между нами. Но даже сейчас я чувствую тебя рядом, в каждом сообщении, в каждом звонке, в каждом сердечке, что ты мне отправляешь.'],
        typeSpeed: 50,
        backSpeed: 0,
        fadeOut: true,
        loop: false,
        showCursor: false,
        onComplete: function() {
            showSecondButton();
        }
    });
}

function showSecondButton() {
    var button2 = document.createElement("button");
    button2.innerText = "Клац!";
    button2.id = "changeTextBtn2";
    button2.style.display = "block";
    button2.style.margin = "20px auto";
    button2.onclick = function() {
        button2.remove();
        changeTextThird();
    };
    document.querySelector(".card").appendChild(button2);
}

function changeTextThird() {
    var typed = new Typed('#text', {
        strings: ['Пусть этот день принесёт тебе радость, улыбки и ощущение, что ты самая любимая и желанная! Пусть мечты сбываются, и пусть наша история будет иметь самое счастливое продолжение. Я верю, что мы обязательно встретимся, и это будет самый лучший день в моей жизни. Люблю тебя безумно, моя Марго! 💖🎮🌷'],
        typeSpeed: 50,
        backSpeed: 0,
        fadeOut: true,
        loop: false,
        showCursor: false
    });
}

// Включаем музыку при клике по экрану
let musicStarted = false;
document.body.addEventListener('click', (event) => {
    changeText(event);

    if (!musicStarted) {
        const audio = document.getElementById('background-music');
        if (audio) {
            audio.play().catch(error => {
                console.log("Safari блокирует автозапуск музыки. Включаем при клике.");
            });
            musicStarted = true;
        } else {
            console.error("Файл вокзал.mp3 не найден.");
        }
    }
});
