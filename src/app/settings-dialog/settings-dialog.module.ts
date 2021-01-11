import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {SettingsDialogComponent} from './settings-dialog.component'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field'
import {FormsModule} from '@angular/forms'
import {MatInputModule} from '@angular/material/input'


@NgModule({
  declarations: [SettingsDialogComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
  ],
})
export class SettingsDialogModule {
}
