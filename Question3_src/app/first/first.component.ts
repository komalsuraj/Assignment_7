import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  public Name = 'Marvellous Infosystems'
  public fun() {
    this.Name = "Educating For Better Tomorrow";
  }

}
