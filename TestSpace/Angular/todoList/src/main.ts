// This is where the whole app starts, just like main function in any other programs

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// On boot it fires up AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
