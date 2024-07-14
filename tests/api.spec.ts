import { test, expect } from '../src/fixtures/base';
import { LoginPage } from '../src/pages/LoginPage';
import { TrucksPage } from '../src/pages/TrucksPage';
import { users } from '../src/users';
import { goto } from '../src/navigation';
import { OwnersPage } from '../src/pages/OwnersPage';


test.describe('API checking tests', () => {
  test.beforeEach( async ({ page }) => {
    const loginPage = new LoginPage(page);
    await goto(loginPage);
    await loginPage.validate(); 
    await loginPage.login(users.testUser);
  });

  test('get loggined used id', async ({ api }) => {
    const { id } = await api.get('me');
    console.log(id);

    await expect(id).toEqual(751);
  });

  test('get trucks numbers of year 2023', async ({ api, page }) => {
    const trucksPage = new TrucksPage(page);
    await goto(trucksPage);
    await trucksPage.validate();
    const { items } = await api.get('trucks');
    const newTrucks = items.filter(item => item.year === 2023).map(item => item.number);
    console.log(newTrucks);

    // just for comparing and understanding that test works
    const result = ["Truck1", "Truck3", "Truck5"];
    await expect(newTrucks).toEqual(result);
  });

  test('get owners names with the same address', async ({ api, page }) => {
    const ownersPage = new OwnersPage(page);
    await goto(ownersPage);
    await ownersPage.validate();
    const { items } = await api.get('owners');
    const addresses = {};  
    items.forEach(element => {
      if (addresses[element.address]) {
        addresses[element.address].push(element.name);
      } else {
        addresses[element.address] = [element.name];
      }
    });

    // just for comparing and understanding that test works
    console.log(addresses);
    await expect(addresses[Object.keys(addresses)[0]].length).toEqual(2);
    // await expect(addresses[Object.keys(addresses)[1]].length).toEqual(9);
  });
})