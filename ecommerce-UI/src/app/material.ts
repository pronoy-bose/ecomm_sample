import { MatButtonModule, MatCheckboxModule, MatChipsModule, MatDialogModule, MatProgressBarModule, MatExpansionModule, MatTableModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule,
    MatChipsModule,
    MatDialogModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule,
    MatChipsModule,
    MatDialogModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatTableModule
  ],
})
export class MaterialModule { }