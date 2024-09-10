import { Injectable } from '@angular/core';
import { ICharacter } from '../interfaces/character.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DBZService {
  public characters: ICharacter[] = [
    { name: 'Goku', power: 100, id: uuidv4() },
    { name: 'Picolo', power: 50, id: uuidv4() },
    { name: 'Chaos', power: 10, id: uuidv4() },
    { name: 'vegeta', power: 90, id: uuidv4() },
  ];

  addCharacter(character: ICharacter) {
    this.characters.push(character);
  }
  deleteCharacter(id: string) {
    this.characters = this.characters.filter((e) => e.id !== id);
  }
}
