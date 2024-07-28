import { DriversPage } from './pages/DriversPage';
import { LoginPage } from './pages/LoginPage';
import { ChatsPage } from './pages/ChatsPage';
import { TrucksPage } from './pages/TrucksPage';
import { OwnersPage } from './pages/OwnersPage';
import { Page } from '@playwright/test';


export class App {

  constructor (readonly page: Page) {}
  
  readonly loginPage = new LoginPage(this.page);
  readonly chatsPage = new ChatsPage(this.page);
  readonly trucksPage = new TrucksPage(this.page);
  readonly driversPage = new DriversPage(this.page);
  readonly ownersPage = new OwnersPage(this.page);


}

