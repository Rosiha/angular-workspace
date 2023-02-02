import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { NameComponent } from './name/name.component';
import { HomeComponent } from './home/home.component';
import { NetflixIndexComponent } from './netflix/netflix-index/netflix-index.component';
import { NetflixHeaderComponent } from './netflix/netflix-header/netflix-header.component';
import { NetflixMainComponent } from './netflix/netflix-main/netflix-main.component';
import { NetflixRegisterComponent } from './netflix/netflix-register/netflix-register.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import  { FormsModule } from  "@angular/forms";
import { ContentProjectionComponent } from './components/content-projection/content-projection.component';
import { MobileDetailsComponent } from './components/mobile-details/mobile-details.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ForDemoComponent } from './components/for-demo/for-demo.component';



@NgModule({
  declarations:[
    LoginComponent,
    NameComponent,
    HomeComponent,
    NetflixIndexComponent,
    NetflixHeaderComponent,
    NetflixMainComponent,
    NetflixRegisterComponent,
    DataBindingComponent,
    ContentProjectionComponent,
    MobileDetailsComponent,
    ProductDetailsComponent,
    ForDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [product-detailsComponent]
})
export class AppModule { }
