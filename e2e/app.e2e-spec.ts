import { PortafolioPage } from './app.po';

describe('portafolio App', () => {
  let page: PortafolioPage;

  beforeEach(() => {
    page = new PortafolioPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
