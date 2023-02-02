import { Component } from '@angular/core';
import { ProductContract } from '../../contracts/ProductContract';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
     public Product:ProductContract = {
        Name: "",
        Price: 0,
        Stock: false,
        ShippedTo: ""
     }
     public UpdatedProduct:ProductContract = {
        Name: "",
        Price: 0,
        Stock: false,
        ShippedTo: ""
     }
     public RegisterClick():void {
         this.UpdatedProduct = this.Product;
     }
}