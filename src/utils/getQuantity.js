
export const getQuantityFunction =(param)=> param.reduce((accumulator, currentValue) => {
    accumulator.precio += currentValue.precio
    accumulator.cantidad += currentValue.cantidad
    return accumulator
     }, {
       cantidad: 0,
       precio: 0
     }); 
