import AURImg from "../imagenes/AUR.jpg";
import microfonoImg from "../imagenes/MIC.jpg";
import notebookImg from "../imagenes/NB.webp";
import mouseImg from "../imagenes/MOUSE.jpg";
import tecladoImg from "../imagenes/TEC.jpg";

export const products = [
  {
    id: 1,
    name: "Auriculares",
    category: "audio",
    price: 50000,
    description: "Auriculares inalámbricos pro",
    img: AURImg,
  },
  {
    id: 2,
    name: "Microfono",
    category: "audio",
    price: 70000,
    description: "Microfono profesional",
    img: microfonoImg,
  },
  {
    id: 3,
    name: "Notebook",
    category: "computadoras",
    price: 740000,
    description: "Notebook Lenovo 1tb ssd",
    img: notebookImg,
  },
  {
    id: 4,
    name: "Mouse Gamer",
    category: "perifericos",
    price: 8000,
    description: "Mouse RGB ",
    img: mouseImg,
  },
  {
    id: 5,
    name: "Teclado Mecanico",
    category: "perifericos",
    price: 15000,
    description: "Teclado retroiluminado",
    img: tecladoImg,
  },
];
