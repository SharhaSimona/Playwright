import { Locator } from '@playwright/test';
import { Base } from '../base/base';


export class Table extends Base {
  readonly table = this.locator('tbody');
  readonly tableRows = this.table.locator('tr');

}