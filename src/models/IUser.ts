export interface IUser {
  email: string;
  password: string;
  getMaskedPassword(): string;
  getEmailDomain(): string;
}