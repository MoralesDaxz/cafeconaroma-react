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
    img_url: "https://i.ibb.co/1X8yxf2/Choco.png",
    price: 7,
    package: "250",
  },
  {
    _id: "classic250",
    available: true,
    brand: "Classic",
    img_url: "https://i.ibb.co/C1Sx2fD/Classic.png",
    price: 5,
    package: "250",
  },
  {
    _id: "intenso250",
    available: true,
    brand: "Intenso",
    img_url: "https://i.ibb.co/WG3KYHc/Intenso.png",
    price: 6,
    package: "250",
  },
  {
    _id: "loma250",
    available: true,
    brand: "Loma",
    img_url: "https://i.ibb.co/5GpPbNK/Loma.png",
    price: 7,
    package: "250",
  },
  {
    _id: "mezcla250",
    available: true,
    brand: "Mezcla",
    img_url: "https://i.ibb.co/N3qPtVw/Mezcla.png",
    price: "6",
    package: "250",
  },
  {
    _id: "sierra250",
    available: true,
    brand: "Sierra",
    img_url: "https://i.ibb.co/rMh2SyN/Sierra.png",
    price: 8,
    package: "250",
  },
  {
    _id: "tardes250",
    available: true,
    brand: "Tardes",
    img_url: "https://i.ibb.co/2n2f74B/Tardes.png",
    price: 8,
    package: "250",
  },
  {
    _id: "volcan250",
    available: true,
    brand: "Volcan",
    img_url: "https://i.ibb.co/XFgG20d/Volcan.png",
    price: 8,
    package: "250",
  },
];
