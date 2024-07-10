import { Base } from '../base';
export class Header extends Base {
  protected readonly root = this.locator('header');

  readonly burgerButton = this.root.locator('[class="d-flex align-center"]').first();

  readonly localTimeView = this.root.locator('[class="mr-2"]');

  readonly notificationButton = this.root.locator('[class="v-btn v-btn--icon v-theme--light text-grey-darken-1 v-btn--density-default v-btn--size-default v-btn--variant-text"]');

  readonly avatarButton = this.root.locator('[class="text-grey-darken-2 body-2"]');

  readonly chevron = this.root.locator('[mdi-chevron-down mdi v-icon notranslate v-theme--light v-icon--size-default text-grey-darken-2 ml-2]')
}