import { Routes } from '@angular/router';
import { CharacterList } from './character-list/character-list';
import { CharacterDetails } from './character-details/character-details';

export const routes: Routes = [
    { path: 'characters', component: CharacterList },
    { path: 'characters/:id', component: CharacterDetails, renderMode: 'no-prerender' } as any
    //{ path: 'characters/:id', component: CharacterDetails }
];
