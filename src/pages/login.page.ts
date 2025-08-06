import { Locator, Page } from '@playwright/test';

export class LoginPage {
  private readonly page: Page;
  private readonly header: Locator;
  private readonly emailInput: Locator;
  private readonly passwordInput: Locator;
  private readonly submitButton: Locator;
  private readonly signUpButton: Locator;
  private readonly apiDocoumentLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = page.getByRole('heading', { name: 'Contact List App' });
    this.emailInput = page.getByRole('textbox', { name: 'Email' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.signUpButton = page.getByRole('button', { name: 'Sign up' });
    this.apiDocoumentLink = page.getByRole('link', { name: 'here' });
  }

  get headerLocator(): Locator {
    return this.header;
  }

  get emailInputLocator(): Locator {
    return this.emailInput;
  }

  get passwordInputLocator(): Locator {
    return this.passwordInput;
  }

  get submitButtonLocator(): Locator {
    return this.submitButton;
  }

  get signUpButtonLocator(): Locator {
    return this.signUpButton;
  }

  get apiDocoumentLinkLocator(): Locator {
    return this.apiDocoumentLink;
  }
}
