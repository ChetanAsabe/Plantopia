import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-equipments',
  imports: [],
  templateUrl: './equipments.component.html',
  styleUrl: './equipments.component.css',
})
export class EquipmentsComponent {
  @Input() equipment: any;
}
