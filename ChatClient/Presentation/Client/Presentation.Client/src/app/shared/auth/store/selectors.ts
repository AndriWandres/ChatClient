import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as authState from './state';

// Feature selector
export const selectAuthFeature = createFeatureSelector<authState.PartialState, authState.State>(authState.AUTH_FEATURE_KEY);

// State selectors
export const selectAuthenticationAttempted = createSelector(
  selectAuthFeature,
  state => state.authenticationAttempted
);

export const selectLoginError = createSelector(
  selectAuthFeature,
  state => state.loginError
);

export const selectUser = createSelector(
  selectAuthFeature,
  state => state.user
);

export const selectAuthenticationSuccessful = createSelector(
  selectAuthFeature,
  state => !!state.user
);

export const selectToken = createSelector(
  selectAuthFeature,
  state => state.token
);

export const selectUserNameExists = createSelector(
  selectAuthFeature,
  state => state.userNameExists
);

export const selectEmailExists = createSelector(
  selectAuthFeature,
  state => state.emailExists
);
