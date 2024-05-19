export interface Evento { 
    _id?: number
    tipo?: Tipo
    fecha: Date
    precio: number
    descripcion: string
    capacidad: number
    restriccionEdad: boolean
}

export interface Tipo {
    _id: number
    nombre: string
}
 