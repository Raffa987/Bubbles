document.getElementById('container').addEventListener('click', function() {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    
    // Dimensioni casuali tra 10px e 100px
    const size = Math.random() * 90 + 10;
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    const time = Math.random() * 5;
    circle.style['animation-duration'] = time;
    
    circle.style.left = `${Math.random() * (window.innerWidth - size)}px`;
    circle.style.top = `${Math.random() * (window.innerHeight - size)}px`;
    document.getElementById('container').appendChild(circle);

    setTimeout(() => {
        circle.remove();
    }, time*1000);
});