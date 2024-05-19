import { Injectable } from '@angular/core';
import { Evento, Tipo } from '../interfaces/evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  eventos: Evento[] = []
  tipos: Tipo[] = [
    { _id: 1, nombre: 'Concierto' },
    { _id: 2, nombre: 'Conferencia' },
    { _id: 3, nombre: 'Taller' },
    { _id: 4, nombre: 'Exposición' },
    { _id: 5, nombre: 'Boda' }
  ]

  getTipos(): Tipo[] {
    return this.tipos
  }

  getEventos(): Evento[] {
    return this.eventos
  }

  getCantidadEventos(): number {
    return this.eventos.length
  }

  postEvento(evento: Evento): void {
    evento._id = this.getCantidadEventos() + 1
    this.eventos.push(evento)
  }

}
