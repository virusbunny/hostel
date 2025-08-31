import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirmation.html',
  styleUrls: ['./confirmation.css']
})
export class ConfirmationComponent {
  roomId!: number;
  studentName: string = '';
  rollNumber: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookingService: BookingService
  ) {}

  ngOnInit() {
    this.roomId = Number(this.route.snapshot.paramMap.get('id'));
    const booking = this.bookingService.getBooking(this.roomId);

    if (booking) {
      this.studentName = booking.studentName;
      this.rollNumber = booking.rollNumber || '';
    }
  }

  goBack() {
    this.router.navigate(['/rooms']);
  }
}
