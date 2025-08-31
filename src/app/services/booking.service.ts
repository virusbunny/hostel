import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private bookedRooms: { roomId: number, studentName: string, rollNumber: string }[] = [];

  bookRoom(roomId: number, studentName: string, rollNumber: string) {
    this.bookedRooms.push({ roomId, studentName, rollNumber });
  }

  isRoomBooked(roomId: number): boolean {
    return this.bookedRooms.some(room => room.roomId === roomId);
  }

  getBooking(roomId: number) {
    return this.bookedRooms.find(room => room.roomId === roomId);
  }
}
