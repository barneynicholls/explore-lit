import { LitElement, html, css, property, query } from 'lit-element';

export class CityInput extends LitElement {

    constructor() {
        super();
        this.addEventListener('search', this.handleSearch);
    }

    static styles = css`
    .form-input {
        min-height: 80px;
        background-color:orange;
    }`

    @property({ type: String }) placeholder = 'Enter city name';
    @property({ type: String }) city = '';
    @property() data = ;

    @query('input', true) _input!: HTMLInputElement;

    handleClick() {
        const name = this._input.value.trim();
        if (name) {
            const options = {
                city: { name },
                bubbles: true,
                composed: true
            };
            this.dispatchEvent(new CustomEvent('search', options));
        }
    }

    handleSearch(e : Event) {
        // fetch('ajax_url')
        //     .then(response => {
        //         if (!response.ok) {
        //             throw new Error('Network response was not ok');
        //         };
        //         response.json();
        //     })
        //     .then(data => {
        //         this.data = data;
        //         console.log('Success:', data);
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });
        this.data = [{ "key1" : "value1"}, {"key2" : "value2"}];
    }

    changeName(event: Event) {
        const input = event.target as HTMLInputElement;
        this.city = input.value;
    }

    render() {
        return html`
        <div class="form-input">
            <label for="city">City:</label><br>
            <input type="text" id="city" name="city" placeholder="${this.placeholder}" @input=${this.changeName}>
            <button @click=${this.handleClick}>Submit</button>
            <p>${this.city}</p>
        </div>`
    }
}
