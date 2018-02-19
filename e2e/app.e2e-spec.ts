import { AngularHeroesTutorialPage } from './app.po';

describe('angular-heroes-tutorial App', function() {
  let page: AngularHeroesTutorialPage;

  beforeEach(() => {
    page = new AngularHeroesTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
