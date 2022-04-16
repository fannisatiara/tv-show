import ImageHeader from "../../assets/images/tvshow.png";

class HeaderJumbotron extends HTMLElement {

    connectedCallback() {
        this.title = this.getAttribute("title") || null;
        this.description = this.getAttribute("description") || null;
        this.action = this.getAttribute("action") || null;

        this.innerHTML = `
        <style>
            .jumbotron {
                border-radius: 1.3rem;
                background-image: linear-gradient(#FDFFA9, #FFD365);
                font-family: 'Franklin Gothic Medium';              
            }

            .jumbotron h1 {
                width: 220px;
                color: #BB6464;
                font-size: 3rem;
                font-weight: bold;
            }

            .jumbotron p {
                width: 220px;
                color: #5f5d5d;
                font-size: 1rem;
            }
        </style>

        <div data-aos="zoom-in">
            <div class="jumbotron pt-0 pb-0">
                <div class="row">
                    <div class="col-3 m-md-auto m-lg-auto p-sm-3">
                        <h1>${this.title}</h1>
                        <p class="d-sm-none d-lg-block">${this.description}</p>
                        <button class="btn btn-warning rounded-pill">Get Started!</button>
                    </div>
                    <div class="col-sm-12 col-md-7">
                        <img src="${ImageHeader}" alt="${this.title}">
                    </div>
                </div>
            </div>
            
        </div>`;
    }
}

customElements.define("header-jumbotron", HeaderJumbotron);
