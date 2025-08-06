import { Locator, Page } from '@playwright/test';

export class ContactListPage {
  private readonly page: Page;
  private readonly header: Locator;
  private readonly addNewContactButton: Locator;
  private readonly nameCell: Locator;
  private readonly birthdateCell: Locator;
  private readonly emailCell: Locator;
  private readonly phoneCell: Locator;
  private readonly addressCell: Locator;
  private readonly cityCell: Locator;
  private readonly countryCell: Locator;
  private readonly logoutButton: Locator;

  constructor(
    page: Page,
    contact: {
      fullName: string;
      birthdate: string;
      email: string;
      phone: string;
      address: string;
      city: string;
      country: string;
    },
  ) {
    this.page = page;
    this.header = page.getByRole('heading', { name: 'Contact List' });
    this.addNewContactButton = page.getByRole('button', {
      name: 'Add a New Contact',
    });
    this.logoutButton = page.getByRole('button', { name: 'Logout' });
    this.nameCell = page.getByRole('cell', { name: contact.fullName }).first();
    this.birthdateCell = page
      .getByRole('cell', { name: contact.birthdate })
      .first();
    this.emailCell = page.getByRole('cell', { name: contact.email }).first();
    this.phoneCell = page.getByRole('cell', { name: contact.phone }).first();
    this.addressCell = page
      .getByRole('cell', { name: contact.address })
      .first();
    this.cityCell = page.getByRole('cell', { name: contact.city }).first();
    this.countryCell = page
      .getByRole('cell', { name: contact.country })
      .first();
  }
  get headerLocator(): Locator {
    return this.header;
  }
  get addNewContactButtonLocator(): Locator {
    return this.addNewContactButton;
  }
  get nameCellLocator(): Locator {
    return this.nameCell;
  }
  get birthdateCellLocator(): Locator {
    return this.birthdateCell;
  }
  get emailCellLocator(): Locator {
    return this.emailCell;
  }
  get phoneCellLocator(): Locator {
    return this.phoneCell;
  }
  get addressCellLocator(): Locator {
    return this.addressCell;
  }
  get cityCellLocator(): Locator {
    return this.cityCell;
  }
  get countryCellLocator(): Locator {
    return this.countryCell;
  }
  get logoutButtonLocator(): Locator {
    return this.logoutButton;
  }
}
