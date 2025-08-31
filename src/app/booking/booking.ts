import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookingService } from '../services/booking.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, MatSnackBarModule],
  templateUrl: './booking.html',
  styleUrls: ['./booking.css']
})
export class Booking {
  roomId!: number;
  studentName: string = '';
  rollNumber: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookingService: BookingService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.roomId = Number(this.route.snapshot.paramMap.get('id'));
  }

confirmBooking() {
  if (!this.studentName || !this.rollNumber) {
    alert('Please enter both Name and Roll Number!');
    return;
  }

  this.bookingService.bookRoom(this.roomId, this.studentName, this.rollNumber);

  this.snackBar.open(
    `🎉 Room ${this.roomId} booked successfully!`,
    'Close',
    { duration: 3000, horizontalPosition: 'center', verticalPosition: 'top' }
  );

  // Navigate to rooms
  setTimeout(() => {
    this.router.navigate(['/rooms']);
  }, 100); // tiny delay ensures snackbar pops first
}

goBack(){
  this.router.navigate(['/rooms']);
}


}
function goBack() {
  throw new Error('Function not implemented.');
}
