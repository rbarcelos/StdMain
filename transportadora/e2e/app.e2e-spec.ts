import { TransportadoraPage } from './app.po';

describe('transportadora App', () => {
  let page: TransportadoraPage;

  beforeEach(() => {
    page = new TransportadoraPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
