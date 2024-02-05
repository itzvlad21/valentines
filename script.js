// script.js
let noClickCount = 0;
const soundElement = document.getElementById('valentine-sound');
const sadMeow = document.getElementById('sad-sound');
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const messageElement = document.getElementById('message');

document.getElementById('yes-button').addEventListener('click', function() {
    document.getElementById('response').innerHTML = "Happy Valentine's Day! 💖 <br> Thank youuuu!!! <br> <img src='happy-cat-happy-happy-cat.gif' alt='heart'>";
    document.getElementById('message').textContent = '';
    noButton.disabled = true;
    sadMeow.pause();
    soundElement.play();
});

document.getElementById('no-button').addEventListener('click', function() {
    noClickCount++;
    const messageElement = document.getElementById('message');
    switch(noClickCount) {
        case 1:
            messageElement.innerHTML = 'Are you sure? Please reconsider! <br> <img src="sad-sad-cat.gif" alt="sad cat">';
            document.getElementById('response').innerHTML = "";
            sadMeow.play();
            break;
        case 2:
            messageElement.innerHTML = 'Oh, come on! Just say Yes! <br> <img src="sad-sad-cat.gif" alt="sad cat">';
            document.getElementById('response').innerHTML = "";
            break;
        case 3:
            messageElement.innerHTML = 'Please? For Valentine\'s Day? <br> <img src="sad-sad-cat.gif" alt="sad cat">';
            document.getElementById('response').innerHTML = "";
            break;
        case 4:
            messageElement.innerHTML = 'Did someone already ask you? <br> <img src="sad-sad-cat.gif" alt="sad cat">';
            document.getElementById('response').innerHTML = "";
            break;
        case 5:
            messageElement.innerHTML = 'Please... <br> <img src="sad-sad-cat.gif" alt="sad cat">';
            document.getElementById('response').innerHTML = "";
            break;
        default:
            messageElement.innerHTML = 'Still waiting for that Yes... <br> <img src="sad-sad-cat.gif" alt="sad cat">';
            document.getElementById('response').innerHTML = "";
    }
});
