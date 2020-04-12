import { Db } from 'mongodb';

import { BaseRepository } from './BaseRepository';
import { Session } from '../entities';

export class SessionsRepository extends BaseRepository<Session> {
  constructor(
    protected readonly db: Db,
    protected readonly collectionName: string
  ) {
    super(db, collectionName);
  }
}
