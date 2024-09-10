import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroes: string[] = ['spiderman', 'ironman', 'hulk', 'superman']
  public deletedHero?: string | null = null

  deleteLastHero():void {
    this.deletedHero = this.heroes.pop();
  }

}
