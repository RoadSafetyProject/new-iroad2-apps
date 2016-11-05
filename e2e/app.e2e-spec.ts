import { Iroad2AppsPage } from './app.po';

describe('iroad-2-apps App', function() {
  let page: Iroad2AppsPage;

  beforeEach(() => {
    page = new Iroad2AppsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
