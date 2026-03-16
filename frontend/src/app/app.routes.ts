import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Home} from './pages/home/home';
import { Signup } from './pages/signup/signup';
import { Inquiries } from './pages/inquiries/inquiries';
import { Inventory } from './pages/inventory/inventory';
import { Jobs } from './pages/jobs/jobs';
import { Estimates } from './pages/estimates/estimates';
import { Customers } from './pages/customers/customers';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'dashboard', component: Dashboard },
    { path: 'home', component : Home},
    { path: 'signup', component : Signup},
    { path  : 'inquiries', component : Inquiries},
    { path  : 'inventory', component : Inventory},
    { path  : 'jobs', component : Jobs},
    { path  : 'estimates', component : Estimates},
    { path  : 'customers', component : Customers}




];
