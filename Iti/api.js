const alumno = [
    {
        gen: 'Varon',
        id: '1',
        img: 'media/alumnos/v1.jpg',
        nameCompleto: 'Facundo Mendez',
        edad: '18',
        materias: 'Si',
        año: '2do',
        barrio: 'Centro',
        data: {
            nombre: "Valentin Carcabelo",
            mascotas: "2",
        }
    },
    {
        gen: 'Varon',
        id: '2',
        img: 'media/alumnos/v2.jpg',
        nameCompleto: 'Adrian Castillo',
        edad: '18',
        materias: 'No',
        año: '1ro',
        barrio: 'Casabo',
        data: {
            nombre: "Susana gimenez",
            mascotas: "7",
        }
    },
    {
        gen: 'Varon',
        id: '3',
        img: 'media/alumnos/v3.jpg',
        nameCompleto: 'Julian Sosa',
        edad: '18',
        materias: 'No',
        año: '3ro',
        barrio: 'Cerro',
    },
    {
        gen: 'Varon',
        id: '4',
        img: 'media/alumnos/v4.jpg',
        nameCompleto: 'Nahuel Gonzales',
        edad: '19',
        materias: 'Si',
        año: '3ro',
        barrio: 'Ciudad Vieja',
    },
    {
        gen: 'Varon',
        id: '5',
        img: 'media/alumnos/v5.jpg',
        nameCompleto: 'Eric Valdez',
        edad: '18',
        materias: 'No',
        año: '2do',
        barrio: 'Ciudad Vieja',
    }

]
const alumna = [{
    gen: 'Mujer',
    id: '6',
    img: 'media/alumnos/m3.jpg',
    nameCompleto: 'Maria Rodriguez',
    edad: '17',
    materias: 'Si',
    año: '1ro',
    barrio: 'Cerro',
},
{
    gen: 'Mujer',
    id: '8',
    img: 'media/alumnos/m2.jpg',
    nameCompleto: 'Sofia Castro',
    edad: '19',
    materias: 'Si',
    año: '3ro',
    barrio: 'Teja',
},
{
    gen: 'Mujer',
    id: '9',
    img: 'media/alumnos/m4.jpg',
    nameCompleto: 'Adriana Lopez',
    edad: '17',
    materias: 'No',
    año: '2do',
    barrio: 'Centro',
},
{
    gen: 'Mujer',
    id: '10',
    img: 'media/alumnos/m5.jpg',
    nameCompleto: 'Belen Silva',
    edad: '18',
    materias: 'No',
    año: '2do',
    barrio: 'Teja',
}]
const docente = [
    {
    gen: 'Mujer',
    img: 'media/docentes/m1.jpg',
    nameCompleto: 'Laura Rodriguez',
    materia:'Programacion',
    Cursos:'2BD | 2BL | 2BM'
},
    {
    gen: 'Hombre',
    img: 'media/docentes/v1.jpg',
    nameCompleto: 'Rodrigo Perez',
    materia:'Base de Datos 1/2',
    Cursos:'3BD | 2BL | 2BM'
},
    {
    gen: 'Mujer',
    img: 'media/docentes/m2.jpg',
    nameCompleto: 'Sofia Sosa',
    materia:'Historia',
    Cursos:'1BD | 1BL | 1BM'
},
    {
    gen: 'Hombre',
    img: 'media/docentes/v2.jpg',
    nameCompleto: 'Martin Castro',
    materia:'Diseño Web',
    Cursos:'2BD | 2BL | 2BM'
},

]
/* let card = document.getElementById("card-temple");
alumno.map((x) => {
    card.innerHTML += `
    <article>
        <div class="card" id="card" >
            <div class="imgBx">
                <img src="${x.img}" alt="${x.nameCompleto}">
            </div>
            <div class="content">
                <div class="details">
                    <h2>${x.nameCompleto}<br> <span>${x.barrio}</span></h2>
                    <div class="data">
                        <h3>Edad <br><span>${x.edad}</span></h3>
                        <h3>Previas <br><span>${x.materias}</span></h3>
                        <h3>Grado <br><span>${x.año}</span></h3>
                    </div>
                    <div class="actionBtn">
                    <button>Contactar</button>
                    </div>
                </div>
            </div>
        </div>
    </article>
        <br> 
    `;
}) */

let carta = document.getElementById("card-temple-V");
alumno.map((x) => {
    carta.innerHTML += `
        
        <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
        <img src="${x.img}" alt="">
        </div>
        <div class="blog-slider__content">
        <div class="blog-slider__title"><h1 style="font-size:35px;">${x.nameCompleto}</h1></div>
        <h2>Barrio: <br> <span class="blog-slider__code">${x.barrio}</span> </h2>
        <div class="blog-slider__text"><h2>Materias Previas: <span>${x.materias}</span></h2></div>
        <a type="button" href="#" class="blog-slider__button">Contactar</a>
        </div>
        </div>
        
        `
})
{
    let card = document.getElementById("card-temple-M");
    alumna.map((x) => {
        card.innerHTML += `
            
            
        <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
        <img src="${x.img}" alt="">
        </div>
        <div class="blog-slider__content">
        <div class="blog-slider__title"><h1 style="font-size:35px;">${x.nameCompleto}</h1></div>
        <h2>Barrio: <br> <span class="blog-slider__code">${x.barrio}</span> </h2>
        <div class="blog-slider__text"><h2>Materias Previas: <span>${x.materias}</span></h2></div>
        <a type="button" href="#" class="blog-slider__button">Contactar</a>
        </div>
        </div>
        
            
            
            `
    })
}
{
let cards = document.getElementById("docentes");
    docente.map((x) => {
        cards.innerHTML += `
        <div class="cards-grid">
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front"
                    style="background-image: url('${x.img}');">

                </div>
                <div class="flip-card-back">
                    <h3>Nombre: <br> <span class="fs-5"> ${x.nameCompleto} </span></h3>
                    <h4>Materia: <br> <span class="fs-5"> ${x.materia} </span></h4>
                    <h4>Cursos: <br> <span class="fs-5"> ${x.Cursos} </span></h4>
                </div>
            </div>
        </div>

    </div>
        `
    })
}