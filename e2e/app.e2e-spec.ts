import { RecordsPage } from './app.po';

describe('records App', () => {
  let page: RecordsPage;

  beforeEach(() => {
    page = new RecordsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
