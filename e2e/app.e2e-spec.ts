import { DataBasePage } from './app.po';

describe('data-base App', () => {
  let page: DataBasePage;

  beforeEach(() => {
    page = new DataBasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
