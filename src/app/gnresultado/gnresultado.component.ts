import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-gnresultado',
  templateUrl: './gnresultado.component.html',
  styleUrls: ['./gnresultado.component.css']
})
export class GnresultadoComponent implements OnInit {

  constructor() { }
  @Input() numBase:number=0;
  @Input() numExponente!:number;
  result!:number;
  acumulador:number=0;
  calcular(){
    this.numBase=Math.abs(this.numBase);
    this.numExponente=Math.abs(this.numExponente);
    let contador:number=0;
  let resultado=1;
    do{
      
      resultado=this.sumar(resultado);
       contador++;
    } while(contador<this.numExponente); 
    this.result=resultado;
 
   console.log(this.result);
   this.acumular(this.result);

  }
  sumar(resul:number):number{
    let suma:number=0;
    let cont:number=0;
  
    do{
      suma=suma+this.numBase;
    
      cont++;
    }while(cont<resul);
    return suma;
  }
  acumular(res:number){
    this.acumulador+=res;
    console.log(this.acumulador);
  }
  ngOnInit(): void {
  }

}
