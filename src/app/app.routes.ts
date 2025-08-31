import { Routes } from '@angular/router';
import { Rooms } from './rooms/rooms';
import { Booking } from './booking/booking';
import { ConfirmationComponent } from './confirmation/confirmation';

export const routes: Routes = [
  { path: '', redirectTo: '/rooms', pathMatch: 'full' },
  { path: 'rooms', component: Rooms },
  { path: 'booking/:id', component: Booking },
  { path: 'confirmation/:id', component: ConfirmationComponent }
];
