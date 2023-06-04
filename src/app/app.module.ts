import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './pages/productlist/productlist.component';
import { ProductCreateComponent } from './pages/product-create/product-create.component';
import { ProductUpdateComponent } from './pages/product-update/product-update.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    ProductDetailComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
