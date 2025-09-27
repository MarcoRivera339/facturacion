import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Product } from '../../interfaces/product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {

  constructor(private productosServicio: ProductsService,
    private router: Router,
    private ruta: ActivatedRoute) { }

  id: any = '';

  producto: Product = {
    codigo: '',
    nombre: '',
    descripcion: '',
    imagen: ''
  };

  ngOnInit(): void {
  this.ruta.params.subscribe(params => {
    this.id = params["id"];
    this.productosServicio.getProductoById(this.id).subscribe(productos => {
      if (productos.length > 0) {
        this.producto = productos[0]; // Tomar el primer (y único) registro
      }
    });
  });
}


  editarProducto(formulario: any): void {
    const productoActualizado = { ...formulario.value };
    this.productosServicio.putProducto(this.id, productoActualizado).subscribe(() => {
      this.router.navigate(['productos'])
    })
  }
}
