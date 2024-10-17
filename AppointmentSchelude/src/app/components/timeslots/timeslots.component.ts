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
  selectedSlot: any = null;
  
  timeSlotsService = inject(TimeslotsService);

  constructor() {}


  async requestSlots( Date: any ) {
    try {
      
      this.timeSlots = await this.timeSlotsService.getSlots(Date);    
      this.timeSlots = this.formatSlots(this.timeSlots);  
      console.log(this.timeSlots);
      
      return this.timeSlots;
    
    } catch (error) {
      
      console.error('Error fetching timeslots:', error);
      return []
    }
  }

  formatSlots(slots: any[]): any[] {
    return slots.map((data) => {
      return {
        ...data,
        StartHour: moment(data.StartHour, 'HH:mm:ss').format('HH:mm'),
        ReservationDate: data.ReservationDate.slice(0, 10)
      };
    });
  }

  onSlotSelect( slot: any ) {
    this.selectedSlot = {
      ...slot,
      ReservationDate: moment(slot.ReservationDate).format('YYYY-MM-DD')
    }
  }

  isSlotAvailable( slot: any ): boolean {
    return slot.Available;
  }

  async onSubmit() {
    try {
      
      await this.timeSlotsService.reserveSlot(this.selectedSlot.ID);
      
      let formatDate = moment(this.selectedSlot.ReservationDate).format('YYYY-MM-DD');
  
      this.onClose();
  
      await this.requestSlots(formatDate);
    
    } catch (error) {
      console.error('Error al reservar el slot:', error);
    }
  }
  

  onClose(){
    this.selectedSlot = null;
  }

}
