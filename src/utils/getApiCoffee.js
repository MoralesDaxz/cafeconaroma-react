export const getApiCoffee = async (url) => {
  const promise = await fetch(url);
  const promiseA = await promise.json();
  return promiseA;
};

export const products = [
  {
    _id: "choco250",
    available: true,
    brand: "Chocolate",
    img_url: "https://i.ibb.co/vYCt5P2/choco.png",
    price: 7,
    package: "250",
  },
  {
    _id: "classic250",
    available: true,
    brand: "Classic",
    img_url: "https://i.ibb.co/f9YPpMM/classic.png",
    price: 5,
    package: "250",
  },
  {
    _id: "intenso250",
    available: true,
    brand: "Intenso",
    img_url: "https://i.ibb.co/BcsDVjL/intenso.png",
    price: 6,
    package: "250",
  },
  {
    _id: "loma250",
    available: true,
    brand: "Loma",
    img_url: "https://i.ibb.co/St3gs1s/loma.png",
    price: 7,
    package: "250",
  },
  {
    _id: "mezcla250",
    available: true,
    brand: "Mezcla",
    img_url: "https://i.ibb.co/VSFrq8v/mezcla.png",
    price: "6",
    package: "250",
  },
  {
    _id: "sierra250",
    available: true,
    brand: "Sierra",
    img_url: "https://i.ibb.co/KjCydLt/sierra.png",
    price: 8,
    package: "250",
  },
  {
    _id: "tardes250",
    available: true,
    brand: "Tardes",
    img_url: "https://i.ibb.co/fQD9L6B/tardes.png",
    price: 8,
    package: "250",
  },
  {
    _id: "volcan250",
    available: true,
    brand: "Volcan",
    img_url: "https://i.ibb.co/HVsSy4j/volcan.png",
    price: 8,
    package: "250",
  },
];
