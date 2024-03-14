// controllers/productos.js
const productos = [
    { id: 1, nombre: 'Duo The Owl Mask', descripcion: 'There’s nothing scarier than seeing Duo the Owl when you haven’t done your lessons.', cantidad: 50, precio: 700, imagen: 'Producto-1.webp' },
    { id: 2, nombre: 'Lily Vinyl Figure', descripcion: 'Embrace your inner emo attitude with the Lily Vinyl Figure.', cantidad: 20, precio: 700, imagen: 'Producto-2.webp' },
    { id: 3, nombre: 'Daily Duolingo Hoodie', descripcion: 'This cozy hoodie comes in classic Duolingo green and sports a logo in the center to let everyone know you’re a friend of the owl.', cantidad: 20, precio: 1000, imagen: 'Producto-3.webp' },
    { id: 4, nombre: 'Duo Strut T-Shirt', descripcion: 'Look out, Duo is on the move! This sleek white tee showcases a vibrant green outline of our beloved Duo the Owl, confidently marching and radiating cuteness.', cantidad: 20, precio: 500, imagen: 'Producto-4.webp' },
    { id: 5, nombre: 'Duo Butt Pin', descripcion: 'Duo the Owl isn’t above posting a thirst trap if that’s what it takes to get you to do your lessons. ', cantidad: 15, precio: 166, imagen: 'Producto-5.webp' },
    { id: 6, nombre: 'Duo Beanie', descripcion: 'Meet the Duo Beanie, the only hat that will heat up your head and your Duolingo streak when the weather gets frosty.', cantidad: 5, precio: 450, imagen: 'Producto-6.webp' },
    { id: 7, nombre: 'Duo Dad Hat - Light Pink', descripcion: 'Featuring a simple silhouette of Duo the Owl on the front, this casual cap is for anyone who wants to show off their love for Duolingo without making too much of a hoot.', cantidad: 20, precio: 500, imagen: 'Producto-7.webp' },
    { id: 8, nombre: 'Duos Mixed Emotions Pin', descripcion: 'Introducing Duos Mixed Emotions Pin. With a flick of a finger, watch Duo the Owl go from "you got this!" to "cmon, dont use Google Translate!" Whether its a gentle nudge to do your lessons or a burst of celebration for your progress.', cantidad: 20, precio: 300, imagen: 'Producto-8.webp' }
    ];
  
  function getProductos() {
    return productos;
  }
  
  function getProductoPorId(id) {
    return productos.find(producto => producto.id === parseInt(id));
  }
  
  module.exports = {
    getProductos,
    getProductoPorId
  };
  