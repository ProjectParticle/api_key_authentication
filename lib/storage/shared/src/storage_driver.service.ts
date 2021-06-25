/**
 * Storage driver
 */

import { APIKey } from './api_key.model';

export abstract class StorageDriver {

  abstract create(apiKey: APIKey): Promise<APIKey>;
  abstract read(): Promise<APIKey>;
  abstract list(search: Partial<APIKey>, pagination: { pageNumber: number; pageSize: number; }): Promise<Array<APIKey>>;
  abstract update(apiKey: APIKey): Promise<APIKey>;
  abstract delete(apiKey: APIKey): Promise<APIKey>;
}
