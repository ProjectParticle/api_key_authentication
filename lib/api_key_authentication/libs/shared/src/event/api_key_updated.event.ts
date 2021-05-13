/**
 * API key updated event
 */

import { ApiKeyModel } from '../api_key.model';

export class ApiKeyUpdatedEvent {

  constructor(readonly apiKey: ApiKeyModel) { }
}
