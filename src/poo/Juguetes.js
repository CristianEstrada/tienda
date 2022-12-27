import { Producto } from "../Helpers/Producto.js";

export class Juguete extends Producto {
  tamano;
  color;
  marca;

  constructor(
    idProducto,
    nombreProducto,
    precioProducto,
    cantidadProducto,
    tamano,
    color,
    marca
    
      ) {
    super(idProducto, nombreProducto, precioProducto, cantidadProducto);
    this.tamano = tamano;
    this.color = color;
    this.marca = marca;

  }
}


