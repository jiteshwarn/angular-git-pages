import { MyAppDemoPage } from './app.po';

describe('my-app-demo App', function() {
  let page: MyAppDemoPage;

  beforeEach(() => {
    page = new MyAppDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
