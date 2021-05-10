import { html, TemplateResult } from 'lit-html';
import '../src/lit-weather.js';

export default {
  title: 'LitWeather',
  component: 'lit-weather',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => html`
  <lit-weather style="--lit-weather-background-color: ${backgroundColor}" .title=${title}></lit-weather>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
