import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    // Use server rendering instead of prerendering to avoid requiring getPrerenderParams
    // for parameterized routes like /fruit/:id.
    renderMode: RenderMode.Server,
  }
];
