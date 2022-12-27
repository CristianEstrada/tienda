import { Producto } from "../Helpers/Producto.js";

export class Vaso extends Producto {
  tamano;
  color;

  constructor(
    idProducto,
    nombreProducto,
    precioProducto,
    cantidadProducto,
    tamano,
    color,
    
      ) {
    super(idProducto, nombreProducto, precioProducto, cantidadProducto);
    this.tamano = tamano;
    this.color = color;

  }
}

