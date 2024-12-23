import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { EquipmentsComponent } from '../equipments/equipments.component';

@Component({
  selector: 'app-product-listings',
  imports: [ProductComponent, EquipmentsComponent],
  templateUrl: './product-listings.component.html',
  styleUrl: './product-listings.component.css',
})
export class ProductListingsComponent {
  products = [
    {
      id: 1,
      name: 'Spider Plant',
      price: 250,
      image: '../../../assets/image1.png',
      category: 'Indoor',
    },
    {
      id: 2,
      name: 'Spider Plant',
      price: 250,
      image: '../../../assets/image2.png',
      category: 'Outdoor',
    },
    {
      id: 3,
      name: 'Spider Plant',
      price: 250,
      image: '../../../assets/image3.png',
      category: 'Outdoor',
    },
    {
      id: 4,
      name: 'Spider Plant',
      price: 250,
      image: '../../../assets/image4.png',
      category: 'Indoor',
    },
    {
      id: 5,
      name: 'Spider Plant',
      price: 250,
      image: '../../../assets/image5.png',
      category: 'Indoor',
    },
    {
      id: 6,
      name: 'Spider Plant',
      price: 250,
      image: '../../../assets/image6.png',
      category: 'Outdoor',
    },
  ];

  equipments = [
    {
      id: 1,
      name: 'White Plant Pots',
      price: 250,
      image: '../../../assets/pot1.png',
    },
    {
      id: 2,
      name: 'Lemon Pots',
      price: 250,
      image: '../../../assets/pot2.png',
    },
    {
      id: 3,
      name: 'RoseWood Pots',
      price: 250,
      image: '../../../assets/pot3.png',
    },
    {
      id: 4,
      name: 'Dove Gray Pots',
      price: 250,
      image: '../../../assets/pot4.png',
    },
    {
      id: 5,
      name: 'SAIC Bottle',
      price: 250,
      image: '../../../assets/pot5.png',
    },
    {
      id: 6,
      name: 'ioda Bottle',
      price: 250,
      image: '../../../assets/pot6.png',
    },
  ];
}
