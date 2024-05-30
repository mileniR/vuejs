var app = new Vue({
    el: '#app',
    data: {
        titulo: 'Discotecas en Lima',
        see: false,
        discotecas: [
            { 
                nombre: 'Di Luna',
                descripcion: 'Ofrece buenos cócteles · Tiene música en vivo · Se va a bailar',
                ubicacion: 'Multicenter, Carlos Izaguirre 275 2do. Nivel',
                imagen: 'img/dis1.jpg'
            },
            { 
                nombre: 'Asia Disco Club',
                descripcion: 'Popular entre los jóvenes locales, con una pista de baile amplia y un área VIP exclusiva.',
                ubicacion: 'C. C, Lima 15311',
                imagen: 'img/dis2.jpg'
            },
            { 
                nombre: 'Murano',
                descripcion: 'Unica con una temática rústica y una amplia selección de cócteles artesanales.',
                ubicacion: 'Av. Carlos Izaguirre 275',
                imagen: 'img/dis3.jfif'
            },
            { 
                nombre: 'Discoteca Paris',
                descripcion: 'Puedes pasar momentos inolvidables en Paris degustando algunas de sus exquisiteces y bebidas',
                ubicacion: 'Av. Uruguay 148, Lima 15001',
                imagen: 'img/dis4.jpg'
            }
        ]
    }
});
