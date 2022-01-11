import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessComponent } from './process.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from 'app/shared/angular-material/angular-material.module';

const routes: Routes = [
    { path:'', component: ProcessComponent}
];

@NgModule({
  declarations: [
    ProcessComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class ProcessModule { }
