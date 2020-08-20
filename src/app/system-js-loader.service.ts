import { Injectable } from '@angular/core';

// Preload all angular libraries
import * as angularAnimations from '@angular/animations';
import * as angularCommon from '@angular/common';
import * as angularCommonHttp from '@angular/common/http';
import * as angularCore from '@angular/core';
import * as angularForms from '@angular/forms';
import * as angularPb from '@angular/platform-browser';
import * as angularPbAnimations from '@angular/platform-browser/animations';

import * as matSnackBar from '@angular/material/snack-bar';

import * as tslib from 'tslib';
import * as rxjs from 'rxjs';
import * as rxjsOperators from 'rxjs/operators';


declare const window: any;

@Injectable({
  providedIn: 'root'
})
export class SystemJsLoaderService {

  constructor() {

    console.log('[SystemJsLoaderService] Constructor');

    // Create a custom resolver
    const originalResolve = window.System.resolve;
    window.System.resolve = function(name: string) {

      const currentLocation = `${location.protocol}//${location.hostname}${(location.port ? ':' + location.port: '')}`;

      // Load lazy libraries from http
      if (name.startsWith('lazy-') || name.startsWith('ngx-')) {

        return `${currentLocation}/deps/${name}.umd.js`;

      // @angular, rxjs and tslib libraries are preloaded
      } else if (name.startsWith('@angular/') || name.startsWith('rxjs') || name === 'tslib' || name.startsWith('http://')) {
        return originalResolve.apply(this, arguments);

      // Load everything else from http
      } else {
        return `${currentLocation}/deps/${name}.js`;
      }
    };

    // Preload all angular libraries to the main bundle
    window.System.set('app:@angular/animations', angularAnimations);
    window.System.set('app:@angular/common', angularCommon);
    window.System.set('app:@angular/common/http', angularCommonHttp);
    window.System.set('app:@angular/core', angularCore);
    window.System.set('app:@angular/forms', angularForms);
    window.System.set('app:@angular/platform-browser', angularPb);
    window.System.set('app:@angular/platform-browser/animations', angularPbAnimations);

    window.System.set('app:@angular/material/snack-bar', matSnackBar);

    window.System.set('app:tslib', tslib);
    window.System.set('app:rxjs', rxjs);
    window.System.set('app:rxjs/operators', rxjsOperators);


    window.System.import('@angular/animations');
    window.System.import('@angular/common');
    window.System.import('@angular/common/http');
    window.System.import('@angular/core');
    window.System.import('@angular/forms');
    window.System.import('@angular/platform-browser');
    window.System.import('@angular/platform-browser/animations');

    window.System.import('@angular/material/snack-bar');

    window.System.import('tslib');
    window.System.import('rxjs');
    window.System.import('rxjs/operators');

  }
}
