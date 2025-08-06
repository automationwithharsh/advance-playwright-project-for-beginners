import { Locator, Page } from '@playwright/test';

export class RegistrationPage {
  private readonly page: Page;
  private readonly header: Locator;
  private readonly firstNameInput: Locator;
  private readonly lastNameInput: Locator;
  private readonly emailInput: Locator;
  private readonly passwordInput: Locator;
  private readonly submitButton: Locator;
  private readonly cancelButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = page.getByRole('button', { name: 'Submit' });
    this.firstNameInput = page.getByRole('textbox', { name: 'First Name' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' });
    this.emailInput = page.getByRole('textbox', { name: 'Email' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.cancelButton = page.getByRole('button', { name: 'Cancel' });
  }
  get headerLocator(): Locator {
    return this.header;
  }
  get firstNameInputLocator(): Locator {
    return this.firstNameInput;
  }
  get lastNameInputLocator(): Locator {
    return this.lastNameInput;
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
  get cancelButtonLocator(): Locator {
    return this.cancelButton;
  }
}
