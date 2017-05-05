import { PersonalComponent }  from './personal/personal.component';
import { WorkComponent }      from './work/work.component';
import { AddressComponent }   from './address/address.component';
import { ResultComponent }    from './result/result.component';

import { Route } from '@angular/router';

export const wizardSteps = [
    // 1st State
    { name: 'personal', url: '/personal',  component: PersonalComponent },
    // 2nd State:
    { name: 'work', url: '/work',  component: WorkComponent },
    // 3rd State
    { name: 'address', url: '/address',  component: AddressComponent },
    // 4th State
    { name: 'result', url: '/result',  component: ResultComponent }
];

export const wizardRoutes: Route[] =[
    // 1st State
    { path: 'personal',   component: PersonalComponent },
    // 2nd State:
    { path: 'work',  component: WorkComponent },
    // 3rd State
    { path: 'address',   component: AddressComponent },
    // 4th State
    { path: 'result',   component: ResultComponent }
];
