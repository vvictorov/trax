import { TraxPage } from './app.po';

describe('trax App', () => {
  let page: TraxPage;

  beforeEach(() => {
    page = new TraxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
