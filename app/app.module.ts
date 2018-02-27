import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//  Componenets
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ShowValueComponent } from './components/show-value/show-value.component';

//  Directives
import { ChangeTextDirective } from './directives/change-text.directive';

//  Pipes
import { CustomPipePipe } from './pipes/custom-pipe.pipe';

//  Routes
import { RouterModule } from '@angular/router';

//  Services
import { CustomServiceService } from './services/custom-service.service';

//  Http Services
import { HttpModule } from '@angular/http';

//  Forms (Template)
import { FormsModule } from '@angular/forms';

//  Forms (Model)
import { ReactiveFormsModule } from '@angular/forms';

//  Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: 
  [
    //  Components
    AppComponent,
    AboutComponent,
    ShowValueComponent,
    
    //  Directives
    ChangeTextDirective,
    
    //  Pipes
    CustomPipePipe
  ],
  imports: 
  [
    BrowserModule,

    //  Routes
    RouterModule.forRoot([
      {
        path: 'about-page',
        component: AboutComponent
      }
    ]),

    //  Http Services
    HttpModule,

    //  Forms (Template)
    FormsModule,

    //  Forms (Model)
    ReactiveFormsModule,

    //  Animations
    BrowserAnimationsModule
  ],
  providers: 
  [
    //  Services
    CustomServiceService
  ],
  bootstrap: 
  [
    AppComponent
  ]
})
export class AppModule { }
