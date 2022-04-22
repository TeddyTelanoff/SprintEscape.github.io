window.onload = hmm;

function hmm() {
    const div = document.createElement('div');
    const rickroll = document.createElement('img');
    rickroll.src = 'https://theotel.github.io/shhh.gif';
    rickroll.alt = 'u got rickrolled';
    const text = document.createElement('h1');
    text.innerHTML = 'Get rickrolled, mate!';
    div.appendChild(rickroll);
    div.appendChild(text);
    document.body.appendChild(div);

    document.addEventListener('click', () => {
        location.reload();
    });

    document.body.style.backgroundColor = getRandomColor();
    div.style.position = 'absolute';

    setInterval(() => {
        document.body.style.backgroundColor = getRandomColor();
        div.style.left = Math.random() * (window.innerWidth- div.clientWidth) + 'px';
        div.style.top = Math.random() * (window.innerHeight- div.clientHeight) + 'px';
    }, 500);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }