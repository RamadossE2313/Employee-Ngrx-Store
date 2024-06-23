import { createAction, props } from "@ngrx/store";
import { UserProfile } from "../../app/models/userprofile";

export const loadUserProfile = createAction('[user-profile] Load User Profiles', props<{parameters: number[]}>());
export const loadUserProfileSuccess = createAction('[user-profile] Load User Profiles Success', props<{userProfiles: UserProfile[]}>());
export const loadUserProfileFailure = createAction('[user-profile] Load User Profiles Failure', props<{error: any}>());
export const clearUserProfileState = createAction('[user-profile] Load User Profiles Failure');