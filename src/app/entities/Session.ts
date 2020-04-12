interface SessionConstructorParams {
  userId: string;
  refreshToken: string;
}

export class Session {
  userId: string;
  refreshToken: string;
  createdAt: Date;
  updatedAt: Date;

  constructor({
    userId,
    refreshToken,
  }: SessionConstructorParams) {
    this.userId = userId;
    this.refreshToken = refreshToken;
  }
}