export interface UsernameAvailableResponse {
  available: boolean;
}

export interface SignupCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}

export interface SignupResponse {
  username: string;
}

export interface SigninResponse {
  username: string;
  password: string;
}

export interface SignedinResponse {
  authenticated: boolean;
  username?: string;
}
