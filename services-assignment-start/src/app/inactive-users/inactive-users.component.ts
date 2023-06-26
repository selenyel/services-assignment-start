import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { CountersService } from '../shared/counters.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})

export class InactiveUsersComponent {
  // [y: string]: any;
  // @Input() users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();
  users: string[]

  constructor(private usersService: UsersService, private countersService: CountersService){
    this.users = usersService.inactiveUsers
  }

  onSetToActive(id: number) {
    //this.userSetToActive.emit(id);

    this.usersService.onSetToActive(id);
    this.countersService.printCount('inactive');

  }
}
