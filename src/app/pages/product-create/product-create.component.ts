import { IProduct } from './../../interface/IProduct';
import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
})
export class ProductCreateComponent {
  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: [0,[Validators.required, Validators.min(0)]],
  });

  constructor(
    private formBuilder: UntypedFormBuilder,
    private productService: ProductService,
    private location: Location
  ) {}
  onHandleSubmit() {
    const product: IProduct = {
      id: '',
      name: this.productForm.value.name || '',
      price: this.productForm.value.price || 0,
    };

    this.productService.addProduct(product).subscribe((product) => {
      alert(`Thêm sản phẩm thành công: ${product.name}`);
      this.location.back();
    });
  }
}