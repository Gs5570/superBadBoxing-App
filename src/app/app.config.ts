import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router'; // provide routes to application
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes'; // routes configuration files

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(), provideRouter(routes), provideAnimations()],
};
