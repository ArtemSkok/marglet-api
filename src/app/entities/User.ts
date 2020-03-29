export class User {
  constructor(
      public id: string,
      public email: string,
      public firstName: string,
      public lastName: string,
      public displayName: string,
      public birthDate: string,
      public photoUrl?: string,
      public hashedPassword?: string,
      public createdAt?: Date,
      public updatedAt?: Date,
      public isVerified?: boolean,
  ) { }
}