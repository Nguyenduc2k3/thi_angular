import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from './pages/productlist/productlist.component';
import { ProductCreateComponent } from './pages/product-create/product-create.component';
import { ProductUpdateComponent } from './pages/product-update/product-update.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: "", component: ProductlistComponent },
  { path: "product-create", component: ProductCreateComponent },
  { path: "products-update/:id", component: ProductUpdateComponent },
  { path: "product-detail/:id", component: ProductDetailComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
