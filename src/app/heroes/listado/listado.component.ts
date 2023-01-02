import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  
  heroes        : string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor']
  heroesBorrados: string[] = []; 

  public borrarHeroe() : void{
    const heroeBorrado: string = this.heroes.shift() || "";
    
    if(heroeBorrado != ""){
      this.heroesBorrados.push(heroeBorrado);
    }

  }


}
