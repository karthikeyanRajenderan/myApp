import { Component, OnInit, Input } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';
import {UserListComponent} from '../user-list/user-list.component';


@Component({
  selector: 'userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  @Input() user : User;

  constructor(private userService: UserService, private listComponent: UserListComponent) { }

  ngOnInit() {
  }

  updateUser() {
    this.userService.updateUser(this.user.id,
      { name: this.user.name, role: this.user.role, email: this.user.eMail })
      .subscribe(
        data => {
          console.log(data);
          this.user = data as User;
        },
        error => console.log(error));
  }
 
  deleteUser() {
    this.userService.deleteUser(this.user.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }

}
