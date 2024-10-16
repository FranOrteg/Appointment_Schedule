import { Component, inject, Input } from '@angular/core';
import { TimeslotsService } from '../../services/timeslots.service';
import { CommonModule } from '@angular/common';
import moment from 'moment';

@Component({
  selector: 'timeslots',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './timeslots.component.html',
  styleUrl: './timeslots.component.css'
})
export class TimeslotsComponent {

  @Input() timeSlots: any[] = [];
  
  timeSlotsService = inject(TimeslotsService);

  constructor() {}


  async requestSlots( Date: any ) {
    try {
      
      this.timeSlots = await this.timeSlotsService.getSlots(Date);      
      return this.timeSlots;
    
    } catch (error) {
      
      console.error('Error fetching timeslots:', error);
      return []
    }
  }


}
