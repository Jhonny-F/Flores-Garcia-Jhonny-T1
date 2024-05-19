import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-informe',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './informe.component.html',
  styleUrl: './informe.component.css'
})
export class InformeComponent {

  cantidadEventos!: string
  fecha: Date = new Date()

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const cantidad = this.route.snapshot.paramMap.get('cantidad')
    if (cantidad) this.cantidadEventos = cantidad
  }

}
