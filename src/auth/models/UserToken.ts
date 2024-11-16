export interface UserToken {
  access_token: string;
  user: {
    name: string;
    email: string;
  };
}
