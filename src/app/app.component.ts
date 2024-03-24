import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { TableComponent } from './components/table/table.component';
import { Service } from './db/models/service.model';
import { serviceList } from './db/data';
import { CardProfessionalComponent } from './components/card-professional/card-professional.component';
import { CardServiceComponent } from './components/card-service/card-service.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TableComponent,
    CardProfessionalComponent,
    CardServiceComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'gabi-system-app';

  ngOnInit(): void {
    initFlowbite();
  }

  services = serviceList;
}
