import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EventoService } from '../../services/evento.service';
import { Evento, Tipo } from '../../interfaces/evento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {

  tipos!: Tipo[]
  eventos!: Evento[]
  formulario!: FormGroup

  constructor(
    private _eventosService: EventoService,
    private fb: FormBuilder,
    private route: Router
  ) {
    this.formulario = this.fb.group({
      tipo: ['', Validators.required],
      fecha: ['', Validators.required],
      precio: ['', Validators.required],
      descripcion: ['', Validators.required],
      capacidad: ['', Validators.required],
      restriccionEdad: [false]
    })
  }

  ngOnInit(): void {
    this.tipos = this._eventosService.getTipos()
    this.eventos = this._eventosService.getEventos()
  }

  registrar(): void {
    
    if(this.formulario.invalid) return
    
    const tipo = this.tipos.find(elemento => elemento._id == this.formulario.value.tipo)
    
    const evento: Evento = {
      tipo: tipo,
      precio: this.formulario.value.precio,
      capacidad: this.formulario.value.capacidad,
      descripcion: this.formulario.value.descripcion,
      fecha: this.formulario.value.fecha,
      restriccionEdad: this.formulario.value.restriccionEdad
    }
    
    this._eventosService.postEvento(evento)
    this.formulario.reset()
    
  }

  cantidadEventos() {
    const cantidad = this._eventosService.getCantidadEventos();
    this.route.navigate(['/informe',cantidad])
  }  

}
