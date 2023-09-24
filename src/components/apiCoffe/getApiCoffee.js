 export const getApiCoffee = async (url) => {
  const promise = await fetch(url);
  const promiseA = await promise.json();
  return promiseA;
};

