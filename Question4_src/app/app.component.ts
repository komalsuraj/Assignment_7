import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  Title = 'Marvellous Infosystems';

  public Uppercase() {
    this.Title = "MARVELLOUS INFOSYSTEMS"
  }

  public Lowercase() {
    this.Title = "marvellous infosystems"

  }
}
