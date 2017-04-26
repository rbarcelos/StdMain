import { CommonPage } from './app.po';

describe('common App', () => {
  let page: CommonPage;

  beforeEach(() => {
    page = new CommonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
