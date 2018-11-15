import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RackComponent } from './rack/rack.component';
import { DeviceComponent } from './device/device.component';
import { RackService } from './rack.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { NewRackComponent } from './new-rack/new-rack.component';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NewDeviceComponent } from './new-device/new-device.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NewDeviceDialogComponent } from './new-device-dialog/new-device-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    RackComponent,
    DeviceComponent,
    NewRackComponent,
    NewDeviceComponent,
    NewDeviceDialogComponent
  ],
  entryComponents: [
    NewRackComponent,
    NewDeviceComponent,
    NewDeviceDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatDialogModule
  ],
  providers: [ RackService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
