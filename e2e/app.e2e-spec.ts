import { LearnProjectPage } from './app.po';

describe('learn-project App', function() {
  let page: LearnProjectPage;

  beforeEach(() => {
    page = new LearnProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
