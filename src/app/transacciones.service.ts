import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Transaccion {
  tipo: string;  
  monto: number;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {
  private transaccionesSubject = new BehaviorSubject<Transaccion[]>([]);
  transacciones$ = this.transaccionesSubject.asObservable();

  constructor() {}


  agregarTransaccion(transaccion: Transaccion) {
    const transacciones = this.transaccionesSubject.value;
    transacciones.push(transaccion);
    this.transaccionesSubject.next(transacciones);  
  }
}
