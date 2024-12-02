import { Component } from '@angular/core';
import { TransaccionesService, Transaccion } from '../transacciones.service';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-finanzas',
  templateUrl: './finanzas.component.html',
  styleUrls: ['./finanzas.component.css'],  
  standalone: true ,
  imports: [FormsModule, CommonModule]
})
export class FinanzasComponent {
  tipo: string = '';
  monto: number = 0;
  descripcion: string = '';
  transacciones: Transaccion[] = [];

  constructor(private transaccionesService: TransaccionesService) {
   
    this.transaccionesService.transacciones$.subscribe(transacciones => {
      this.transacciones = transacciones;
    });
  }

  onSubmit() {
    if (this.tipo && this.monto && this.descripcion) {
      const nuevaTransaccion: Transaccion = {
        tipo: this.tipo,
        monto: this.monto,
        descripcion: this.descripcion
      };
     
      this.transaccionesService.agregarTransaccion(nuevaTransaccion);

      this.tipo = '';
      this.monto = 0;
      this.descripcion = '';
    }
  }
}
