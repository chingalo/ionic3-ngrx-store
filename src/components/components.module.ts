import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { UserComponent } from './user/user';
@NgModule({
  declarations: [UserComponent],
  imports: [IonicModule],
  exports: [UserComponent]
})
export class ComponentsModule {}
