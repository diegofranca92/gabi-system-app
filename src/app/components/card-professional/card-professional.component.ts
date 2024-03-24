import { Component, Input } from '@angular/core';
import { Service } from '../../db/models/service.model';

@Component({
  selector: 'app-card-professional',
  standalone: true,
  imports: [],
  templateUrl: './card-professional.component.html',
  styleUrl: './card-professional.component.css'
})
export class CardProfessionalComponent {
  service: Service = {} as Service;
}
