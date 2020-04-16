import { v4 as uuidv4 } from 'uuid';

interface IUserConstructorParams {
  email: string;
  hashedPassword: string;
  firstName: string;
  lastName: string;
  login: string;
  birthDate: Date;
}

export class User {
  id: string;
  email: string;
  login: string;
  hashedPassword: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  //  photoUrl?: string,

  constructor({
    email,
    hashedPassword,
    firstName,
    lastName,
    login,
    birthDate,
  }: IUserConstructorParams) {
    this.id = uuidv4();
    this.hashedPassword = hashedPassword; // TODO: Move hashing logic here
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.login = login;
    this.birthDate = birthDate;
  }

}