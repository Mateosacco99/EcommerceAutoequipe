const productos = [
    {
        id: 1,
        nombre: "Neumatico Michelin LTX Force",
        descripcion: "225/65 R17 106H",
        stock: 10,
        precio: 335213,
        categoria: 'neumaticosCamioneta',
        imagen: '../../public/img/LTX-Force-Unidad.png'
    },
    {
        id: 2,
        nombre: "Neumatico Michelin Primacy 4",
        descripcion: "205/55 R16 91V",
        stock: 10,
        precio: 215489,
        categoria: 'neumaticosAuto',
        imagen: '../../public/img/Primacy-4-Unidad.png'
    },
    {
        id: 3,
        nombre: "Neumatico Michelin Primacy 4",
        descripcion: "225/45 R17 91V",
        stock: 10,
        precio: 255028,
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