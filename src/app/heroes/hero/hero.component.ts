import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

    public name: string = "ironman";
    public age: number = 45;

    get capiatalizedName():string{
        return this.name.toUpperCase()
    }

    getHeroDescription():string {
        return `${this.name} - ${this.age}`
    }

    changeHero():void {
        //TODO: agregar la deficion del metodo
        // throw "Metodo no implementado"
        this.name = "Spiderman"
    }
    
    changeAge():void {
        this.age = 25
    }

    resetForm():void{
        this.name = "ironman"
        this.age = 45
    }
}
