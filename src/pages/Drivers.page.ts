import { expect } from '@playwright/test';
import { BaseViewPage } from './baseViewPage';
import { Footer } from './components/footer';
import { Navigation } from '../navigation';
import { Table } from './components/table';


export class DriversPage extends BaseViewPage implements Navigation{
  readonly footer = new Footer(this.page);

  readonly table = new Table(this.page);

  protected readonly URL = 'users/drivers';

  async waitForLoadState() {}

  
}