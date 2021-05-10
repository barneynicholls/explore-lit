import { html, fixture, expect } from '@open-wc/testing';

import { LitWeather } from '../src/LitWeather.js';
import '../src/lit-weather.js';

describe('LitWeather', () => {
  let element: LitWeather;
  beforeEach(async () => {
    element = await fixture(html`<lit-weather></lit-weather>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('What\'s the weather like?');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
