import { APIRequestContext, expect } from '@playwright/test';

const endpoints = {
  me: '/api/v1/dispatchers/me',
  trucks: '/api/v1/trucks?',
  owners: '/api/v1/owners?'
} as const;

export class API {
  constructor(readonly request: APIRequestContext) {}

  async get(endpointName: keyof typeof endpoints) {
    const res = await this.request.get(endpoints[endpointName]);
    await expect(res).toBeOK();
    return res.json(); 
  }
}