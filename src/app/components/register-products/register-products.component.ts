import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-register-products',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register-products.component.html',
  styleUrl: './register-products.component.css'
})

export class RegisterProductsComponent {
  constructor(private servicioProductos: ProductsService) { }

  producto: Product = {
    codigo: '',
    nombre: '',
    descripcion: '',
    imagen: ''
  };

  guardarProducto(formulario: any) {
    this.servicioProductos.postProductos(formulario.value).subscribe(() => {
      window.location.reload();
    })
  }
  
}