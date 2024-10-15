import { Component, inject } from '@angular/core';
import { TimeslotsService } from '../../services/timeslots.service';

@Component({
  selector: 'app-timeslots',
  standalone: true,
  imports: [],
  templateUrl: './timeslots.component.html',
  styleUrl: './timeslots.component.css'
})
export class TimeslotsComponent {

  timeSlots = [];
  
  timeSlotsService = inject(TimeslotsService);

  constructor() {}


  async ngOnInit(){
   const date = "2024-11-07T23:00:00.000Z" 
   const timeSlots = await this.timeSlotsService.getSlots(date);
   console.log(timeSlots)
  }
}
