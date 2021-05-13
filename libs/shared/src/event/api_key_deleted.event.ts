/**
 * API key deleted event
 */

import { ApiKeyModel } from '../api_key.model';

export class ApiKeyDeletedEvent {

  constructor(readonly apiKey: ApiKeyModel) { }
}
