# Advance Playwright Project

This project is an advanced automation framework built using [Playwright](https://playwright.dev/) and TypeScript. It is designed for robust end-to-end testing of web applications, featuring modular architecture, reusable actions, fixtures, and page objects.

## Features

- **TypeScript Support**: Strongly typed code for reliability and maintainability.
- **Playwright Integration**: Fast, reliable browser automation.
- **Modular Structure**: Organized actions, fixtures, interfaces, and page objects.
- **Reusable Test Data**: Centralized test data management.
- **Global Setup/Teardown**: Automated environment management for tests.
- **ESLint**: Code linting for consistent style and quality.

## Project Structure

```
AdvancePlaywrightProject/
├── buildproperties.yaml
├── eslint.config.mjs
├── package.json
├── playwright.config.ts
├── project.json
├── tsconfig.json
├── src/
│   ├── index.ts
│   ├── actions/
│   ├── fixtures/
│   ├── interface/
│   ├── pages/
│   ├── resources/
│   │   ├── testdata/
│   │   └── utils/
├── tests/
│   ├── login.spec.ts
│   └── registration.spec.ts
├── utils/
│   ├── common.utitilties.ts
│   ├── global-setup.ts
│   └── global-teardown.ts
```

## Getting Started

### Prerequisites

- Node.js (v16 or above)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd AdvancePlaywrightProject
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running Tests

- Run all tests:
  ```bash
  npx playwright test
  ```
- Run a specific test:
  ```bash
  npx playwright test tests/login.spec.ts
  ```

### Linting

- Check code style:
  ```bash
  npx eslint .
  ```

## Customization

- **Add new actions/pages**: Place new files in `src/actions/` or `src/pages/`.
- **Test data**: Update or add files in `src/resources/testdata/`.
- **Global setup/teardown**: Edit `utils/global-setup.ts` and `utils/global-teardown.ts`.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.
