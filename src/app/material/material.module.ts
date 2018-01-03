import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule,MatCardModule,MatProgressSpinnerModule, 
         MatButtonModule, MatIconModule,MatGridListModule,
         MatToolbarModule, MatDialogModule, MatSnackBarModule
         } from "@angular/material";
@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  exports:[
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule
  ],    
  declarations: []
})
export class MaterialModule { }
