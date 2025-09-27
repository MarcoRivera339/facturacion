import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterProductsComponent } from './components/register-products/register-products.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'crearProducto', component: RegisterProductsComponent },
    { path: 'listarProductos', component: ListProductsComponent },
    { path: 'editar-producto/:id', component: EditProductComponent },
    { path: '**', redirectTo: '' }
];
