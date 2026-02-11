const productos = [
    {
        id: 1,
        nombre: "Producto 1",
        descripcion: "Descripción del Producto 1",
        stock: 10,
        precio: 100,
        categoria: 'neumaticosCamioneta',
        imagen: '../../public/img/LTX-Force-Unidad.png'
    },
    {
        id: 2,
        nombre: "Producto 2",
        descripcion: "Descripción del Producto 2",
        stock: 10,
        precio: 100,
        categoria: 'neumaticosAuto',
        imagen: '../../public/img/Primacy-4-Unidad.png'
    },
    {
        id: 3,
        nombre: "Producto 3",
        descripcion: "Descripción del Producto 3",
        stock: 10,
        precio: 100,
        categoria: 'neumaticosAuto',
        imagen: '../../public/img/Primacy-4-Unidad.png'
    },
];

let error = false;

export const getProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (error) {
                reject('Error al obtener los productos ');
            } else {
                resolve(productos);
            }

        }, 3000)
    })
};

export const getOneProduct = (id)=> {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('El producto no existe')
            }else{
                let product = productos.find((prod)=> prod.id === parseInt(id))
                resolve(product)
            }
        },2000)
    })
}