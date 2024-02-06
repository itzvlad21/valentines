// script.js
let noClickCount = 0;
const soundElement = document.getElementById('valentine-sound');
const sadMeow = document.getElementById('sad-sound');
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const messageElement = document.getElementById('message');
const dancingSound = document.getElementById('dancing-sound');
const dancingCat = document.getElementById('dancing-cat');
const dramaticSound = document.getElementById('dramatic-sound');
dancingSound.play();

document.getElementById('yes-button').addEventListener('click', function() {
    document.getElementById('response').innerHTML = "Happy Valentine's Day! 💖 <br> Thank youuuu!!! I Love You!!! <br> <img src='happy-cat-happy-happy-cat.gif' alt='heart'>";
    document.getElementById('message').textContent = '';
    dancingCat.style.display = "none";
    noButton.style.display = "none";
    yesButton.style.display = "none";
    dancingSound.pause();
    dramaticSound.pause();
    sadMeow.pause();
    noButton.disabled = true;
    soundElement.play();
});

document.getElementById('no-button').addEventListener('click', function() {
    noClickCount++;
    const messageElement = document.getElementById('message');
    switch(noClickCount) {
        case 1:
            messageElement.innerHTML = 'Are you sure? Please reconsider! <br> <img src="sad-sad-cat.gif" alt="sad cat">';
            document.getElementById('response').innerHTML = "";
            yesButton.style.transform =  'scale(1.1)';
            noButton.style.transform = 'scale(0.9)';
            dancingCat.style.display = "none";
            dancingSound.pause();
            sadMeow.play();
            break;
        case 2:
            messageElement.innerHTML = '<p style="font-size: 1.2em;">Oh, come on! Just say Yes! <br> <img src="sad-sad-cat.gif" alt="sad cat">';
            yesButton.style.transform =  'scale(1.2)';
            noButton.style.transform = 'scale(0.8)';
            document.getElementById('response').innerHTML = "";
            break;
        case 3:
            messageElement.innerHTML = '<p style="font-size: 1.4em;">Please? For Valentine\'s Day? <br> <img src="sad-sad-cat.gif" alt="sad cat">';
            yesButton.style.transform =  'scale(1.3)';
            noButton.style.transform = 'scale(0.7)';
            document.getElementById('response').innerHTML = "";
            break;
        case 4:
            messageElement.innerHTML = '<p style="font-size: 1.6em;">Did someone already ask you? <br> <img src="sad-sad-cat.gif" alt="sad cat">';
            yesButton.style.transform =  'scale(1.4)';
            noButton.style.transform = 'scale(0.6)';
            document.getElementById('response').innerHTML = "";
            break;
        case 5:
            messageElement.innerHTML = '<p style="font-size: 1.8em;">Whyyyyyy?? <br> <img src="dramatic-cat.gif" alt="sad cat">';
            yesButton.style.transform =  'scale(1.5)';
            noButton.style.transform = 'scale(0.5)';
            document.getElementById('response').innerHTML = "";
            sadMeow.pause();
            dramaticSound.play();
            break;
        case 6:
            messageElement.innerHTML = '<p style="font-size: 2em;">Please... <br> <img src="dramatic-cat.gif" alt="sad cat">';
            yesButton.style.transform =  'scale(1.6)';
            noButton.style.transform = 'scale(0.4)';
            document.getElementById('response').innerHTML = "";
            break;
        default:
            messageElement.innerHTML = '<p style="font-size: 2.2em;">Still waiting for that Yes... :< <br> <img src="dramatic-cat.gif" alt="sad cat">';
            yesButton.style.transform =  'scale(2)';
            noButton.style.transform = 'scale(0.2)';
            document.getElementById('response').innerHTML = "";
    }
});
