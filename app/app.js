var app = new Vue({
    el: '#app',
    data: {
        titulo: 'Discotecas',
        see: false,
        discotecas: [
            { 
                nombre: 'Di Luna',
                ubicacion: 'Multicenter, Carlos Izaguirre 275 2do. Nivel',
                imagen: 'img/dis1.jpg'
            },
            { 
                nombre: 'Asia Disco Club',
                ubicacion: 'C. C, Lima 15311',
                imagen: 'img/dis2.jpg'
            },
            { 
                nombre: 'Murano',
                ubicacion: 'Av. Carlos Izaguirre 275',
                imagen: 'img/dis3.jfif'
            },
            { 
                nombre: 'Discoteca Paris',
                ubicacion: 'Av. Uruguay 148, Lima 15001',
                imagen: 'img/dis4.jpg'
            }
        ]
    }
});
