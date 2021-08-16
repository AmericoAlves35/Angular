import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CourseModule } from './courses/course.module';
import { Error404Component } from './core/component/error-404/error-404.component';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent
   
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule,
    CoreModule,
    RouterModule.forRoot([
     {
        path: '', redirectTo:'courses', pathMatch:'full'
     }
     
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
