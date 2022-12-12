'use strict'

const grande   = document.querySelector('.carrousel__grande')
const point    = document.querySelectorAll('.point')

point.forEach( (cadaPoint, i) => {
    point[i].addEventListener('click',()=> {

        let posicion = i
        let operacion = posicion * -12.5

        grande.style.transform = `translateX(${ operacion}%)`

        point.forEach ( ( cadaPunto , i )=>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')

    })
});