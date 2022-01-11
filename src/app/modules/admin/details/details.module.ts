import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details.component';
import { AngularMaterialModule } from 'app/shared/angular-material/angular-material.module';


const routes: Routes = [
    { path:'', component: DetailsComponent}
];

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class DetailsModule { }
