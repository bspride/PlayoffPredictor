import { PlayoffPredictorPage } from './app.po';

describe('playoff-predictor App', () => {
  let page: PlayoffPredictorPage;

  beforeEach(() => {
    page = new PlayoffPredictorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
