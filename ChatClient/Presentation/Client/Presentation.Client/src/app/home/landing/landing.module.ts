import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { SloganModule } from './slogan/slogan.module';
import { LandingIllustrationModule } from './illustration/illustration.module';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SloganModule,
    LandingIllustrationModule
  ]
})
export class LandingModule { }
