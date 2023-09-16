
const getApiCoffee = async (url) => {
    const promise = await fetch(url);
    const promiseA = await promise.json()
    console.log(promiseA.products);
    return promiseA
}

export  {getApiCoffee}