import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule], // ✅ Add HttpClientModule here
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // ✅ Corrected property name
})
export class App {
  protected title = 'Hostel Booking';
}
