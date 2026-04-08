import { RenderMode, ServerRoute } from '@angular/ssr';


export const serverRoutes: ServerRoute[] = [
  {
    path: 'characters/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      const res = await fetch('https://hp-api.onrender.com/api/characters');
      const data = await res.json();
      
      return data.slice(0, 5).map((character: any) => ({ id: character.id }));
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];

