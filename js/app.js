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
        strings: ['Желаю весеннего настроения, пусть на душе всегда будет светло и радостно. Желаю, чтобы на лице всегда сияла улыбка, пусть жизнь будет щедра на подарки. В самый женский день года желаю простого женского счастья и здоровья.'],
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
    button1.innerText = "Сменить текст";
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
        strings: ['Ты самая лучшая! Пусть каждый день приносит тебе счастье и радость!'],
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
    button2.innerText = "Ещё раз сменить текст";
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
        strings: ['Ты моё счастье! Скоро будем вместе, и я безумно тебя люблю! ❤️'],
        typeSpeed: 50,
        backSpeed: 0,
        fadeOut: true,
        loop: false,
        showCursor: false
    });
}

// Автоматическое воспроизведение музыки
document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("bg-music");
    
    // Попытка автозапуска (иногда браузеры требуют взаимодействия с пользователем)
    var playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log("Автовоспроизведение заблокировано браузером. Ожидается действие пользователя.");
        });
    }
});
