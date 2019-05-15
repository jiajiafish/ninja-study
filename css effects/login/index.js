var box = document.getElementsByClassName("box")[0];
document.onmousemove = function (event) {
    var ratio = 15
    var x = (event.clientX - window.innerWidth/2)*ratio/(window.innerWidth/2)
    var y = (event.clientY - window.innerHeight/2)*ratio/(window.innerHeight/2)
    console.log(x,y)
    box.style.boxShadow = `${x}px ${y}px 30px #105044`
    box.style.transform = `rotateY(${x}deg) perspective(${x*50}px) translate(-50%,-50%)`
}

// transform: rotateY(40deg) perspective(400px);