const productos = [
    {
        id: 1,
        nombre: "Neumatico Michelin LTX Force",
        descripcion: "225/65 R17 106H",
        stock: 10,
        precio: 335213,
        categoria: 'Neumaticos para Camioneta',
        imagen: '../../public/img/LTX-Force-Unidad.png'
    },
    {
        id: 2,
        nombre: "Neumatico Michelin Primacy 4",
        descripcion: "205/55 R16 91V",
        stock: 10,
        precio: 215489,
        categoria: 'Neumaticos para Auto',
        imagen: '../../public/img/Primacy-4-Unidad.png'
    },
    {
        id: 3,
        nombre: "Neumatico Michelin Primacy 4",
        descripcion: "225/45 R17 91V",
        stock: 10,
        precio: 255028,
        categoria: 'Neumaticos para Auto',
        imagen: '../../public/img/Primacy-4-Unidad.png'
    },
    {
        id: 4,
        nombre: "Neumatico Michelin LTX Force",
        descripcion: "265/60 R18 110T",
        stock: 10,
        precio: 472346,
        categoria: 'Neumaticos para Camioneta',
        imagen: '../../public/img/LTX-Force-Unidad.png'
    },
    {
        id: 5,
        nombre: "Neumatico Michelin Agilis 3",
        descripcion: "215/65 R16 106/104T",
        stock: 10,
        precio: 396638,
        categoria: 'Neumaticos de Carga',
        imagen: '../../public/img/Agilis-3-Unidad.png'
    },
    {
        id: 6,
        nombre: "Neumatico Michelin Agilis 3",
        descripcion: "225/75 R16 118/116R",
        stock: 10,
        precio: 428587,
        categoria: 'Neumaticos de Carga',
        imagen: '../../public/img/Agilis-3-Unidad.png'
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

export const getProductosByCategoria = (categoria)=> {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Error al obtener productos por categoría')
            }else{
                let products = productos.filter((prod)=> prod.categoria === categoria)
                resolve(products)
            }
        },2000)
    })
}