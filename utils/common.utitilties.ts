import * as urls from '../src/resources/utils/endpoint.json';
import { request, Page } from '@playwright/test';
import { ReportingApi } from '@reportportal/agent-js-playwright';
import { error } from 'console';

export default class Utilities {
  public static getUrl() {}

  /**
   * Function to generate login token
   * @param email string
   * @param password string
   * @returns string token
   */
  public async getLoginToken(email: string, password: string): Promise<string> {
    let token = '';
    const url = urls.url + urls.users.loginUser;
    let context = await request.newContext();
    let response = await context
      .post(url, {
        data: {
          email: email,
          password: password,
        },
        headers: {
          'Content-Type': 'application/json',
          Accept: '*/*',
          Connection: 'keep-alive',
        },
        ignoreHTTPSErrors: true,
      })
      .catch((error) => {
        throw new Error('Request Error:', error);
      });
    let responseJson: Record<any, any> = await response.json();
    token = `Bearer ${responseJson.token}`;
    ReportingApi.info(`Token: ${token}`);
    return token;
  }
  /**
   * Function to get response
   * @param url string
   * @param userDetails email and Password string
   * @returns json
   */
  public async getResponse(
    url: string,
    userDetails: { emailId: string; password: string },
  ): Promise<string> {
    let endpoint = urls.url + url;
    const token = await this.getLoginToken(
      userDetails.emailId,
      userDetails.password,
    );
    let context = await request.newContext();
    let response = await context
      .get(endpoint, {
        headers: {
          Authorization: token,
        },
        ignoreHTTPSErrors: true,
      })
      .catch((error) => {
        throw new Error(`Error Occured due to ${error}`);
      });
    if (!response.ok()) {
      ReportingApi.warn(`HTTP Error Status ${response.status()}`);
    }
    return JSON.stringify(await response.json(), null, 2);
  }
}
