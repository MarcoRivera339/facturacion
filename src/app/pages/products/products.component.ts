import { Component } from '@angular/core';
import { RegisterProductsComponent } from "../../components/register-products/register-products.component";
import { ListProductsComponent } from "../../components/list-products/list-products.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RegisterProductsComponent, ListProductsComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}
