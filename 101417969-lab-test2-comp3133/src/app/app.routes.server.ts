import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];

export async function getPrerenderParams() {
  const res = await fetch('https://hp-api.onrender.com/api/characters');
  const data = await res.json();
  return data.map((character: any) => ({ id: character.id }));
}
