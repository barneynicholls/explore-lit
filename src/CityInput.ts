import { LitElement, html, css, property } from 'lit-element';

export class CityInput extends LitElement {
    static styles = css`
    .form-input {
        min-height: 80px;
        background-color:orange;
    }`
    @property({ type: String }) placeholder = 'Enter city name';
    @property({ type: String }) city = '';

    changeName(event: Event) {
        const input = event.target as HTMLInputElement;
        this.city = input.value;
    }

    handleClick(event: Event) {
        alert(this.city);
    }

    render() {
        return html`
        <div class="form-input">
            <label for="city">City:</label><br>
            <input type="text" id="city" name="city" @input=${this.changeName} placeholder="${this.placeholder}">
            <button @click=${this.handleClick}>Submit</button>
            <p>
            You entered:'${this.city}'
            </p>
        </div>`
    }
}
