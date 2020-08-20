import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ApplicationRef, Compiler, Injector, ComponentFactory, NgModuleFactory, NgModuleRef, ComponentFactoryResolver } from '@angular/core';

import { SystemJsLoaderService } from './system-js-loader.service';

// Prepare output for SystemJS
declare const window: any;

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {

  constructor(private readonly compiler: Compiler,
              private readonly injector: Injector,
              private readonly SystemJsLoader: SystemJsLoaderService) {

    console.log('[APP] Constructor');

  }

  ngDoBootstrap(appRef: ApplicationRef) {

    console.log('[APP] ngDoBootstrap');

    const currentLocation = `${location.protocol}//${location.hostname}${(location.port ? ':' + location.port: '')}`;

    return window.System.import(`${currentLocation}/deps/lazy-a.umd.js`).then((moduleToCompile: any) => {

      // Hardcoded module and component names
      const staticModuleName: string = 'LazyAModule';
      const statupAppComponentName: string = 'LazyAComponent';

      let moduleFactory: NgModuleFactory<any>;

      if (moduleToCompile[staticModuleName] instanceof NgModuleFactory) {
        moduleFactory = moduleToCompile[staticModuleName];
      } else {
        moduleFactory = this.compiler.compileModuleSync(moduleToCompile[staticModuleName]);
      }

      const moduleRef: NgModuleRef<any> = moduleFactory.create(this.injector);
      const resolver: ComponentFactoryResolver = moduleRef.componentFactoryResolver;

      const applicationComponentFactory: ComponentFactory<any> = resolver.resolveComponentFactory(moduleToCompile[statupAppComponentName]);

      // Bootstrap application from lazyload Component
      if (document.querySelector(applicationComponentFactory.selector)) {
        appRef.bootstrap(applicationComponentFactory);
      }

    });

  }

}
