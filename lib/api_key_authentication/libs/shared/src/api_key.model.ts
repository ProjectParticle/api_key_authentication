/**
 * API key model
 */

export type ApiKeyModel = {

  /**
   * Determine whether API key is enabled or not
   */
  enabled: boolean;

  /**
   * Application-specific data (e.g. { userId: string; clientId: string; })
   */
  metadata: any;
};
