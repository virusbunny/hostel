import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './rooms.html',
  styleUrls: ['./rooms.css']
})
export class Rooms {
  rooms = [
    { id: 101, type: 'Single Bed', price: 5000 },
    { id: 102, type: 'Double Bed', price: 8000 },
    { id: 103, type: 'Triple Bed', price: 10000 },
    { id: 104, type: 'AC Room', price: 12000 },
    { id: 105, type: 'Non-AC Room', price: 4000 }
  ];

  studentName: string = '';

  constructor(private router: Router, private bookingService: BookingService) {}

  bookRoom(roomId: number) {
    if (!this.bookingService.isRoomBooked(roomId)) {
      this.bookingService.bookRoom(roomId, this.studentName, '');
      this.router.navigate(['/booking', roomId]);
    }
  }

  isBooked(roomId: number): boolean {
    return this.bookingService.isRoomBooked(roomId);
  }
}
