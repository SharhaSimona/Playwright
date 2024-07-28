import { expect } from '@playwright/test';
import { Base } from './base';
import { Header } from '../components/header';
import { Sidebar } from '../components/sidebar';
import { Table } from '../components/table';
import { Footer } from '../components/footer';
import { Navigation } from '../../navigation';

export abstract class BaseViewPage extends Base implements Navigation{
  readonly header = new Header(this.page);
  readonly sidebar = new Sidebar(this.page);
  readonly table = new Table(this.page);
  readonly footer = new Footer(this.page);


  protected abstract readonly URL: string;

  async waitForLoadState(): Promise<void> {};
    
  url() {
    return this.URL;
  }
}