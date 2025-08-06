import { Locator, Page } from '@playwright/test';

export class AddNewContatctPage {
  private readonly page: Page;
  private readonly header: Locator;
  private readonly firstNameInput: Locator;
  private readonly lastNameInput: Locator;
  private readonly birthdateInput: Locator;
  private readonly emailInput: Locator;
  private readonly phoneInput: Locator;
  private readonly streetAddress1: Locator;
  private readonly streetAddress2: Locator;
  private readonly cityInput: Locator;
  private readonly countryInput: Locator;
  private readonly stateInput: Locator;
  private readonly postalCodeInput: Locator;
  private readonly saveButton: Locator;
  private readonly cancelButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = page.getByRole('heading', { name: 'Add Contact' });
    this.firstNameInput = page.getByRole('textbox', { name: '* First Name:' });
    this.lastNameInput = page.getByRole('textbox', { name: '* Last Name:' });
    this.birthdateInput = page.getByRole('textbox', { name: 'Date of Birth:' });
    this.emailInput = page.getByRole('textbox', { name: 'Email:' });
    this.phoneInput = page.getByRole('textbox', { name: 'Phone:' });
    this.streetAddress1 = page.getByRole('textbox', {
      name: 'Street Address 1:',
    });
    this.streetAddress2 = page.getByRole('textbox', {
      name: 'Street Address 2:',
    });
    this.cityInput = page.getByRole('textbox', { name: 'City:' });
    this.countryInput = page.getByRole('textbox', { name: 'Country:' });
    this.stateInput = page.getByRole('textbox', { name: 'State or Province:' });
    this.postalCodeInput = page.getByRole('textbox', { name: 'Postal Code:' });
    this.saveButton = page.getByRole('button', { name: 'Submit' });
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
  get birthdateInputLocator(): Locator {
    return this.birthdateInput;
  }
  get emailInputLocator(): Locator {
    return this.emailInput;
  }
  get phoneInputLocator(): Locator {
    return this.phoneInput;
  }
  get streetAddress1Locator(): Locator {
    return this.streetAddress1;
  }
  get streetAddress2Locator(): Locator {
    return this.streetAddress2;
  }
  get cityInputLocator(): Locator {
    return this.cityInput;
  }
  get countryInputLocator(): Locator {
    return this.countryInput;
  }
  get stateInputLocator(): Locator {
    return this.stateInput;
  }
  get postalCodeInputLocator(): Locator {
    return this.postalCodeInput;
  }
  get saveButtonLocator(): Locator {
    return this.saveButton;
  }
  get cancelButtonLocator(): Locator {
    return this.cancelButton;
  }
}
