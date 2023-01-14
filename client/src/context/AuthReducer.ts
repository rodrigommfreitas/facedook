import { AppStateType, AuthActionType } from '../globals/types';

const AuthReducer = (state: any, action: AuthActionType) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case 'LOGIN_SUCCESS':
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case 'LOGIN_FAILURE':
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    case 'FOLLOW':
      return {
        ...state,
        user: {
          ...state.user,
          following: [...state.user.following, action.payload],
        },
      };
    case 'UNFOLLOW':
      return {
        ...state,
        user: {
          ...state.user,
          following: state.user.following.filter(
            (following: string) => following !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

export default AuthReducer;
