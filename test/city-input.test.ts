import { html, fixture, expect, elementUpdated  } from '@open-wc/testing';

import { CityInput } from '../src/CityInput.js';
import '../src/city-input.js';

describe('LitWeather', () => {
  let element: CityInput;
  beforeEach(async () => {
    element = await fixture(html`<city-input></city-input>`);
  });

  it('renders an input', () => {
    const inputElement = element.shadowRoot!.querySelector('input')!;
    expect(inputElement).to.exist;
    expect(inputElement.placeholder).to.equal('Enter city name');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });

  it('updates city on input change', async ()=>{
    const inputElement = await element.shadowRoot!.querySelector('input')!;
    const cityElement = await element.shadowRoot!.querySelector('p')!;
    const cityName = "a city name";
    inputElement.value = "kkk";
    await elementUpdated(inputElement);
    expect(cityElement).to.have.text(cityName);
  });
});