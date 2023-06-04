import { ProductService } from 'src/app/services/product.service';
import { IProduct } from './../../interface/IProduct';
import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';
@Component({
  selector: "app-product-update",
  templateUrl: "./product-update.component.html"
})
export class ProductUpdateComponent {
  product!: IProduct;
  // Khởi tạo biến product có interface: IProduct
  // Dấu "!" hiển thị rằng biến này sẽ được gán giá trị sau, lần đầu khởi tạo sẽ không có giá trị ban đầu.
  productForm = this.formBuilder.group({
    name: ["", [Validators.required, Validators.minLength(4)]],
    price: [0,[Validators.required, Validators.min(0)]],
  });
  // productForm sẽ tạo ra giá trị default và validation cho Form như trên

  constructor(private formBuilder: FormBuilder, private productService: ProductService,private location: Location, private router: ActivatedRoute) {
    this.router.paramMap.subscribe((params) => {
      const id = String(params.get("id"));
      // lấy ra id của sản phẩm
      this.productService.getProductById(id).subscribe(
        // Tìm ra sản phẩm theo id và patchValue vào form
        (data) => {
          this.product = data;

          this.productForm.patchValue({
            name: data.name,
            price: data.price,
          });
        },
        (error) => console.log(error.message)
      );
    });
  }
  onHandleSubmit() {
    if(confirm("Bạn chắc chắn cập nhật không??")) {
      if (this.productForm.valid) {
        const updatedProduct: IProduct = {
          id: this.product.id,
          name: this.productForm.value.name || this.product.name,
          price: this.productForm.value.price || this.product.price,
        };
    
        this.productService.updateProduct(updatedProduct).subscribe((product) => {
          alert(`Cập nhật sản phẩm thành công: ${product.name}`);
          // console.log("product", product);
          this.location.back();
        });
      }
    }
  }
  
}