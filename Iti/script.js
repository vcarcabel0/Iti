//login
const cedula = '54274390';
const contra = '123';
function acceder() {
    localStorage.setItem("CI", document.getElementById("ci").value);
    localStorage.setItem("Contraseña", document.getElementById("contraseña").value);
    
    if ((document.getElementById("ci").value == cedula) && (document.getElementById("contraseña").value == contra)) {
        location.href="home.html";
    } else {
        alert("Los valores que ingreso no son correctos, por favor intentelo de nuevo");
    }
};

document.getElementById('button-up').addEventListener("click",scrollUp);

function scrollUp(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0){
        window.scrollTo (0,0)
    }
}

buttonUp = document.getElementById('button-up');

window.onscroll = function(){

    var scroll = document.documentElement.scrollTop;
    if (scroll > 500){
        buttonUp.style.transform = 'scale(1)';
    }
    else if(scroll < 500){
        buttonUp.style.transform = 'scale(0)';
    }
}

//NavBar

const navMenu = document.getElementById("nav-menu"),
    toggleMenu = document.getElementById("toggle-menu"),
    closeMenu = document.getElementById("close-menu");

toggleMenu.addEventListener("click", () => {
    navMenu.classList.toggle('show')
})

closeMenu.addEventListener("click", () => {
    navMenu.classList.remove ('show')
})
