import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICharacter } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: ICharacter[] = [];

  trackByItems(index: number, item: ICharacter): string {
    return item.name;
  }

  deleteCharacter(id: string) {
    this.onDeleteCharacter.emit(id)
  }
}
