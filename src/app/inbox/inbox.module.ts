import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { HomeComponent } from './home/home.component';
import { EmailCreateComponent } from './email-create/email-create.component';
import { EmailReplyComponent } from './email-reply/email-reply.component';
import { EmailIndexComponent } from './email-index/email-index.component';
import { EmailShowComponent } from './email-show/email-show.component';
import { PlaceholderMailComponent } from './placeholder-mail/placeholder-mail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    EmailCreateComponent,
    EmailReplyComponent,
    EmailIndexComponent,
    EmailShowComponent,
    PlaceholderMailComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    InboxRoutingModule,
    SharedModule
  ]
})
export class InboxModule { }
