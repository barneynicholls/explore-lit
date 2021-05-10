import { LitElement, html, css, property } from 'lit-element';
import './city-input'

export class LitWeather extends LitElement {
  @property({ type: String }) title = 'What\'s the weather like?';

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--lit-weather-background-color);
    }

    main {
      flex-grow: 1;
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;

  render() {
    return html`
      <main>
        <h1>${this.title}</h1>

        <city-input></city-input>

      </main>

      <p class="app-footer">
        this is a footer
      </p>
    `;
  }
}
