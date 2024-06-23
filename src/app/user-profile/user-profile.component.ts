import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserProfileStateInterface } from '../models/userprofile.state';
import * as userProfileActions from '../../ngrx-store/user-profile-store/user.profile.actions';
import { UserProfile } from '../models/userprofile';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {
  
  userProfiles: UserProfile[] = [];

  constructor(private store: Store<{userProfiles: any}>){
    store.select("userProfiles").subscribe((response: UserProfileStateInterface) =>{
      console.log(response);
      this.userProfiles = response.userProfiles;
    })
  }

  ngOnInit(): void {
    //this.loadAllUserProfiles();
   }
 
   loadAllUserProfiles()
   {
      let parameters: number[] =[1,2];
      this.store.dispatch(userProfileActions.loadUserProfile({parameters}));
   }

   clearUserProfileState()
   {
     this.store.dispatch(userProfileActions.clearUserProfileState());
   }

}
