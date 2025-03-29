import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CounterModule } from './counter/counter.module';
import { DbzModule } from './dbz/dbz.module';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { AsdComponent } from './asd/asd/asd.component';
import { Asd2Component } from './asd/asd2/asd2.component';


@NgModule({
    declarations: [
        AppComponent,
        AsdComponent,
        Asd2Component,
    ],
  imports: [
        BrowserModule,
        CounterModule,
        HeroesModule,
        DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
