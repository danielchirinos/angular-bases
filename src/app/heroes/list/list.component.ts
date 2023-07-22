import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
    public heroName: string[] = ["Spiderman", "JaironMan", "Hulk", "Thor"]
    public deletedHero?: string;
    removeLastHero():void{
        
        this.deletedHero = this.heroName.pop()

    }
}

