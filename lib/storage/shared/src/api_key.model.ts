/**
 * API key model
 */

export class APIKey {

  constructor(
    public readonly clientId: string,
    public readonly apiKey: string,
    public readonly enabled: boolean,
    public readonly metadata: any,
  ) { }
}
