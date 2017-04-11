import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from './nav.component';
import { UserService } from './user.service';

@NgModule({
  imports: [CommonModule],
  declarations: [NavComponent],
  exports: [NavComponent],
  providers: [UserService]
})
export class CoreModule {}