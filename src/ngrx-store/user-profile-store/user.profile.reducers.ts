import { createReducer, on } from "@ngrx/store";
import { UserProfileStateInterface } from "../../app/models/userprofile.state";
import * as UserProfileActions from "./user.profile.actions";

// create initial state
export const initialState: UserProfileStateInterface = {
    userProfiles: []
}

// reducers
export const userProfileReducers = createReducer(initialState,

    on(UserProfileActions.loadUserProfileSuccess, (state : UserProfileStateInterface, {userProfiles}) => 
    ({...state,
        userProfiles: userProfiles
    })),

    on(UserProfileActions.loadUserProfileFailure, (state : UserProfileStateInterface, {error}) => 
    ({...state,
        userProfiles: state.userProfiles
    })),

    on(UserProfileActions.clearUserProfileState, (state : UserProfileStateInterface) => 
    ({...state,
        userProfiles: initialState.userProfiles
    }))

    )