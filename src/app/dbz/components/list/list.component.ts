import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

    @Output()
    onDeleteId: EventEmitter<number> = new EventEmitter();

    @Input()
    public characterList: Character[] = [{
        name: "Trunk",
        power: 10
    }]


    emitDeleteCharacter(index:number):void{
        this.onDeleteId.emit(index)
    }

}
