import { Component, Input } from '@angular/core';
import { Service } from '../../db/models/service.model';

@Component({
  selector: 'app-card-service',
  standalone: true,
  imports: [],
  templateUrl: './card-service.component.html',
  styleUrl: './card-service.component.css'
})
export class CardServiceComponent {
  @Input() service?: Service;
}
