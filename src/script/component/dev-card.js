class DevCard extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>

            .dev-card {
                margin-top: 10px;
                font-size: 9px;
                color: #000000;
                text-align: center;
                text-decoration: none;
            }

            .dev-card .card {
                border: 1px solid #D3DEDC;
                border-radius: 4px;
                margin-bottom: 10px;
                padding: 10px;
                
            }

            .my-3 {
                margin-top: 1rem;
                margin-bottom: 1rem;              
            }

            a{text-decoration:none}

        </style>
        
        <hr class="my-3">
        <div class="dev-card">
            <div class="card d-inline-block w-100 mb-3">
                <span> Tv Shows &#169; 2022 created by : 
                    <a href="https://www.linkedin.com/in/fannisa-tiara-salsabila-901048231/"><strong>Fannisa Tiara Salsabila</strong></a>
                </span>
            </div>
        </div>`;
    }
}

customElements.define("dev-card", DevCard);