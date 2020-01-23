import { NgModule } from '@angular/core';
import {MatFormFieldModule,
   MatInputModule,
   MatButtonModule,
   MatCardModule,
   MatSelectModule,
   MatDividerModule,
   MatIconModule
  } from '@angular/material';


const MaterialComponents = [
MatButtonModule,
MatCardModule,
MatFormFieldModule,
MatInputModule,
MatSelectModule,
MatDividerModule,
MatIconModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
