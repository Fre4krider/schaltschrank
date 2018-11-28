import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RackComponent } from './rack/rack.component';
import { DeviceComponent } from './device/device.component';
import { RackService } from './services/rack.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { NewRackComponent } from './new-rack/new-rack.component';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NewDeviceComponent } from './new-device/new-device.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NewDeviceErrorDialogComponent } from './new-device-error-dialog/new-device-error-dialog.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { RackDataService } from './services/rack-data.service';
import { DeviceDataService } from './services/device-data.service';
import { NewRackErrorDialogComponent } from './new-rack-error-dialog/new-rack-error-dialog.component';
import { NewDeviceIdErrorDialogComponent } from './new-device-id-error-dialog/new-device-id-error-dialog.component';
import { RackListComponent } from './rack-list/rack-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RackComponent,
    DeviceComponent,
    NewRackComponent,
    NewDeviceComponent,
    NewDeviceErrorDialogComponent,
    DeviceDetailComponent,
    NewRackErrorDialogComponent,
    NewDeviceIdErrorDialogComponent,
    RackListComponent
  ],
  entryComponents: [
    NewRackComponent,
    NewDeviceComponent,
    NewDeviceErrorDialogComponent,
    DeviceDetailComponent,
    NewRackErrorDialogComponent,
    NewDeviceIdErrorDialogComponent
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
  providers: [
    RackService,
    RackDataService,
    DeviceDataService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
