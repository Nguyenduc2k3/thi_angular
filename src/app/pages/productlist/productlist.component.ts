import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/IProduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent {
  products: IProduct[] = [];
  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => console.log(error.message)
    );
  }
  delete(id: string) {
    if (confirm('Bạn chắc chưa?')) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.products = this.products.filter(product => product.id !== id);
      });
    }
  }
}
