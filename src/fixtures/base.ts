export * from '@playwright/test';
import { API } from '../helpers/api';
import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DriversPage } from '../pages/DriversPage';
import { TrucksPage } from '../pages/TrucksPage';
import { ChatsPage } from '../pages/ChatsPage';
import { OwnersPage } from '../pages/OwnersPage';
// import { Steps } from '../helpers/steps'; ///

type MyFixture = {
  api: API
  loginPage: LoginPage;
  driversPage: DriversPage;
  trucksPage: TrucksPage;
  chatsPage: ChatsPage;
  ownersPage: OwnersPage;
};

export const test = base.extend<MyFixture>({
  api: async ({ page }, use) => await use(new API(page.request)),
  loginPage: async ({ page }, use) => await use(new LoginPage(page)),
  driversPage: async ({ page }, use) => await use(new DriversPage(page)),
  trucksPage: async ({ page }, use) => await use(new TrucksPage(page)),
  chatsPage: async ({ page }, use) => await use(new ChatsPage(page)),
  ownersPage: async ({ page }, use) => await use(new OwnersPage(page)),
  ///steps: async({ app, api }, use) => await use(new Steps(app, api)),
});