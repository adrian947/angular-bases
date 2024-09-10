import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 22;
  public showButtonName: boolean = true;
  public showButtonAge: boolean = true;

  get capitalizedName(): string {
    return this.name.toLocaleUpperCase();
  }

  getHeroDescriptions(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Superman';
    this.showButtonName = false;
  }

  changeAge(): void {
    this.age = 30;
    this.showButtonAge = false;
  }
  reset(): void {
    this.name = 'Ironman';
    this.age = 22;
    this.showButtonAge = true;
    this.showButtonName = true;
  }
}
