/**
 * Audit log model
 */

export type AuditLogModel = {

  /**
   * System timestamp
   */
  timestamp: Date;

  /**
   * Target API key
   */
  apiKey: string;

  /**
   * Client information
   */
  client: any;

  /**
   * Authentication result
   */
  result: any;

  /**
   * Any extra information
   */
  metadata?: any
};
