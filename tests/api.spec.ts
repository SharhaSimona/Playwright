import { test, expect } from '../src/fixtures/base';
import { goto } from '../src/navigation';


test.describe('API checking tests', () => {

  test('get loggined used id', async ({ api }) => {
    const { id } = await api.get('me');
    console.log(id);

    await expect(id).toEqual(751);
  });

  test('get trucks numbers of type ', async ({ api, app }) => {
    await goto(app.trucksPage);
    await app.trucksPage.validate();
    const { items } = await api.get('trucks');
    const newTrucks = items.filter(item => item.type === 'cv').map(item => item.number);

    const result = ["Truck1"];
    await expect(newTrucks).toEqual(result);
  });

  test('get owners names with the same address', async ({ api, app }) => {
    await goto(app.ownersPage);
    await app.ownersPage.validate();
    const { items } = await api.get('owners');
    const addresses = {};  
    items.forEach(element => {
      if (addresses[element.address]) {
        addresses[element.address].push(element.name);
      } else {
        addresses[element.address] = [element.name];
      }
    });

    await expect(addresses[Object.keys(addresses)[0]].length).toEqual(2);
  
  });

  test('Replace digits with emojis in response Dims & payload', async ({ app}) => {
    const emojiMap = ['😀', '🫠', '🫠', '🤤', '🤥', '🥵', '😎', '🤢', '👺', '👽️'];

    await app.page.route('**/api/v1/trucks?*', async route => {
      const response = await route.fetch();
      const json = await response.json();
      function changeNumber (number) {
        return number.toString().split('').map((item)=> emojiMap[item]).join('');
      }
     
    json.items = json.items.map((item) => {
      if (item.trailer) {
        item.trailer.payload = changeNumber(item.trailer.payload);
        item.trailer.length = changeNumber(item.trailer.length);
        item.trailer.min_width = changeNumber(item.trailer.min_width);
        item.trailer.min_height = changeNumber(item.trailer.min_height);
        }
      return item;
    });   

    await route.fulfill({ 
        response, 
        json 
      });
    });
    await goto(app.trucksPage);
    await app.page.waitForSelector('table');
    await app.trucksPage.validate();
    await app.page.screenshot({ path: 'screenshot.png' });
 
  });
})