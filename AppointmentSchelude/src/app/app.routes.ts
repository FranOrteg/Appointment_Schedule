import { Routes } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginGuard } from './guards/login.guard';
import { TimeslotsComponent } from './components/timeslots/timeslots.component';

export const routes: Routes = [

    { path: '' , pathMatch: 'full', redirectTo: 'calendar'},
    
    ////////////
    
    { path: 'calendar' , component: CalendarComponent, canActivate: [LoginGuard]},
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignUpComponent},
    
    ////////////

    { path: '**' , redirectTo: ''}
    
];
