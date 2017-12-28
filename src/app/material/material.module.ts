import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule,MatCardModule, MatButtonModule, MatIconModule,MatGridListModule, MatToolbarModule } from "@angular/material";
@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule
  ],
  exports:[
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule
  ],
  declarations: []
})
export class MaterialModule { }
