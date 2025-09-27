import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {
  productos: any[] = [];
  id: string = '';
  productosFiltrados: any[] = [];
  filtroNombre: string = '';


  constructor(private servicioProductos: ProductsService, private router: Router,
    private ruta: ActivatedRoute) {
  }

  ngOnInit() {
    this.servicioProductos.getProductos().subscribe(data => {
      this.productos = Object.keys(data).map(key => ({
        id: key, ...data[key]
      }));
      this.productosFiltrados = [...this.productos];
    });
  }

 eliminarProducto(id: number): void {
  const confirmar = window.confirm('¿Estás seguro de que deseas eliminar este producto?');
  if (!confirmar) return; // Si el usuario cancela, no hacemos nada

  this.servicioProductos.deleteProducto(id).subscribe({
    next: () => {
      // Eliminar del array principal
      this.productos = this.productos.filter(producto => producto.id !== id);
      // Eliminar del array filtrado también
      this.productosFiltrados = this.productosFiltrados.filter(producto => producto.id !== id);
      alert('Producto eliminado correctamente'); // Opcional: mensaje de éxito
    },
    error: (error) => {
      console.log('No se puede eliminar el producto', error);
      alert('Ocurrió un error al eliminar el producto'); // Opcional: mensaje de error
    }
  });
}


  filtrarProductos() {
    const filtro = this.filtroNombre.toLowerCase();
    this.productosFiltrados = this.productos.filter(producto =>
      producto.nombre.toLowerCase().includes(filtro)
    );
  }
}
