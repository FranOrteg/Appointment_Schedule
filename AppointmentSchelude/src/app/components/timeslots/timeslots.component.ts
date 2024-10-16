import { Component, inject } from '@angular/core';
import { TimeslotsService } from '../../services/timeslots.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'timeslots',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './timeslots.component.html',
  styleUrl: './timeslots.component.css'
})
export class TimeslotsComponent {

  timeSlots: any[] = [];
  
  timeSlotsService = inject(TimeslotsService);

  constructor() {}


  async ngOnInit() {
    const date = "2024-11-08";
    try {
      const response = await this.timeSlotsService.getSlots(date);
      if (response && response.length > 0) {
        this.timeSlots = response.map(( data ) => {
          return {
            ...data,
            StartHour: data.StartHour.slice(0,-3)
          }
        });
      }
      console.log(this.timeSlots);
    } catch (error) {
      console.error('Error fetching timeslots:', error);
    }
  }
}
