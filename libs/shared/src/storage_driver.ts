/**
 * Storage driver interface
 */

import { ApiKeyModel } from './api_key.model';
import { AuditLogModel } from './audit_log.model';

export const CLIENT_STORAGE_DRIVER_SERVICE = 'CLIENT_STORAGE_DRIVER_SERVICE';

export interface ClientStorageDriver {

  /**
   * Fetch API model by its ID
   * @param apiKey API key to fetch by
   */
  fetchByApiKey(apiKey: string): Promise<ApiKeyModel | undefined>;
}

export const MANAGEMENT_STORAGE_DRIVER_SERVICE = 'MANAGEMENT_STORAGE_DRIVER_SERVICE';

export interface ManagementStorageDriver {

  /**
   * Create a new API key
   * @param apiKeyModel API key model
   */
  create(apiKeyModel?: Partial<ApiKeyModel>): Promise<ApiKeyModel>;

  /**
   * Delete an already existed API key
   * @param apiKey Target API key
   */
  delete(apiKey: string): Promise<void>;

  /**
   * Enable an API key
   * @param apiKey Target API key
   */
  setEnabled(apiKey: string): Promise<ApiKeyModel | undefined>;

  /**
   * Disable an API key
   * @param apiKey Target API key
   */
  setDisabled(apiKey: string): Promise<ApiKeyModel | undefined>;

  /**
   * Fetch API authentication logs
   * @param fromDate Minimum acceptable date (inclusive)
   * @param toDate Maximum acceptable date (inclusive)
   * @param apiKeys Target API key(s) (leave blank if you want to skip API key criterion)
   */
  fetchLogs(fromDate: Date, toDate: Date, ...apiKeys: Array<string>): Promise<AuditLogModel>;
}
