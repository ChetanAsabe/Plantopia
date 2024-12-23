import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './pages/home/home.component';
import { ProductListingsComponent } from './pages/product-listings/product-listings.component';
import { CareComponent } from './pages/care/care.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ButtonModule,
    HomeComponent,
    ProductListingsComponent,
    CareComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Plantopia';
}
