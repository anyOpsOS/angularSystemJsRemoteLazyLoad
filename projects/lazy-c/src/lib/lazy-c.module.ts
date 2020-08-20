import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LazyCComponent } from './lazy-c.component';
import { LazyCService } from './lazy-c.service';

import { LoggerModule, NgxLoggerLevel, LoggerConfig, NGXLogger } from 'ngx-logger';

@NgModule({
  declarations: [LazyCComponent],
  imports: [
    HttpClientModule,
    MatSnackBarModule,
    LoggerModule
  ],
  providers: [
    {
      provide: LoggerConfig, useValue: {
        level: NgxLoggerLevel.DEBUG,
        // serverLoggingUrl: '/api/logs',
        // serverLogLevel: NgxLoggerLevel.OFF,
        // disableConsoleLogging" : true
      }
    },
    NGXLogger,
    LazyCService
  ],
  exports: [LazyCComponent]
})
export class LazyCModule {

  constructor() {
    console.log('[LazyCModule] Constructor');
  }

}
