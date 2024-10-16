import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMomentDateModule, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MatInputModule } from '@angular/material/input';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { TimeslotsComponent } from "../timeslots/timeslots.component";
import { CommonModule } from '@angular/common';
import { TimeslotsService } from '../../services/timeslots.service';
import moment from 'moment';

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatMomentDateModule,
    MatInputModule,
    FormsModule,
    TimeslotsComponent,
    CommonModule
],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'], 
})

export class CalendarComponent {
  
  selectedDate: Date | null = null;
  slots: any[] = []
  
  timeSlotService = inject(TimeslotsService);
  
  constructor(){}


  
  async onDateChange(event: any) {
    
    this.selectedDate = new Date(event.value);
    let formattedDate = this.formatDate(this.selectedDate);
    
    this.slots = await this.timeSlotService.getSlots(formattedDate);

    this.slots = this.slots.map(( data ) => {
      return {
        ...data,
        StartHour: moment(data.StartHour, 'HH:mm:ss').format('HH:mm')
      }
    });
  }

  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }
}
