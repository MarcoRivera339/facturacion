import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private SUPABASE_URL = 'https://lgdermcumyptsrifkjay.supabase.co/rest/v1/productos';
  private SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnZGVybWN1bXlwdHNyaWZramF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5MjQyOTEsImV4cCI6MjA3NDUwMDI5MX0.YcBsZfF9oEq85AlBoGxIfW5xTe_ZnXQfLeHeoszSzCc'; // reemplaza con tu anon key

  private headers = new HttpHeaders({
    'apikey': this.SUPABASE_KEY,
    'Authorization': `Bearer ${this.SUPABASE_KEY}`,
    'Content-Type': 'application/json',
    'Prefer': 'return=representation' // para que devuelva el registro creado
  });

  constructor(private http: HttpClient) { }

  // Crear producto
  postProductos(producto: Product): Observable<any> {
    return this.http.post(this.SUPABASE_URL, producto, { headers: this.headers });
  }

  // Obtener productos
  getProductos(): Observable<any> {
    return this.http.get(this.SUPABASE_URL, { headers: this.headers });
  }

  // Obtener producto por id
  getProductoById(id: number): Observable<any> {
    return this.http.get(`${this.SUPABASE_URL}?id=eq.${id}`, { headers: this.headers });
  }

  // Actualizar producto
  putProducto(id: number, producto: Product): Observable<any> {
    return this.http.patch(`${this.SUPABASE_URL}?id=eq.${id}`, producto, { headers: this.headers });
  }

  // Eliminar producto
  deleteProducto(id: number): Observable<any> {
    return this.http.delete(`${this.SUPABASE_URL}?id=eq.${id}`, { headers: this.headers });
  }
}