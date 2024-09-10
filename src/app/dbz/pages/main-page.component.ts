import { Component } from '@angular/core';
import { ICharacter } from '../interfaces/character.interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  constructor(private readonly dbzService: DBZService) {}

  get characters(): ICharacter[] {
    return [...this.dbzService.characters];
  }

  deleteCharacter(id: string): void {
    this.dbzService.deleteCharacter(id);
  }
  addCharacter(character: ICharacter): void {
    this.dbzService.addCharacter(character);
  }
}
