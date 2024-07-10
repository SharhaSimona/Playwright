import { Base } from '../base';

export class Footer extends Base {
  readonly footer = this.locator('[class="v-data-table-footer"]');

  readonly perPageDropdown = this.footer.locator('[class="v-data-table-footer__items-per-page"]');

  readonly counter = this.footer.locator('[class="v-data-table-footer__info"]');

  readonly prevButton = this.footer.locator('[class="v-pagination__prev"]');
  
  readonly nextButton = this.footer.locator('[class="v-pagination__next"]');
}