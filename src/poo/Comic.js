import { Producto } from "../Helpers/Producto.js";

export class Comic extends Producto {
  cantidadPaginas;
  generoComic;
  editorial;
  constructor(
    idProducto,
    nombreProducto,
    precioProducto,
    cantidadProducto,
    cantidadPaginas,
    generoComic,
    editorial
      ) {
    super(idProducto, nombreProducto, precioProducto, cantidadProducto);
    this.cantidadPaginas = cantidadPaginas;
    this.generoComic = generoComic;
    this.editorial = editorial;

  }
}


