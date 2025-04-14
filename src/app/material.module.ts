import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';
// import { ThemePalette } from '@angular/material/core';

// const themeColor: ThemePalette = 'primary'; // Should reflect your theme


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule
  ]
})
export class MaterialModule { }
