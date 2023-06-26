import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { CountersService } from '../shared/counters.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();

  constructor(private usersService: UsersService, private countersService: CountersService){}

  onSetToInactive(id: number) {
    //this.userSetToInactive.emit(id);
    this.usersService.onSetToInactive(id);
    this.countersService.printCount('active');
  }
}
