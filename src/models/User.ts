import type { IUser } from "./IUser";

export default class User implements IUser {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  getMaskedPassword(): string {
    return "******";
  }

  getEmailDomain(): string {
    const parts = this.email.split("@");
    return parts.length > 1 ? parts[1] : "";
  }
}