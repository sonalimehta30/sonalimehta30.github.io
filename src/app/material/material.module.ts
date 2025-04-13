import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';


@NgModule({
  declarations: [
    MatIconModule,
    MatButtonModule,
    MatBadgeModule
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatBadgeModule
  ]
})
export class MaterialModule { }
