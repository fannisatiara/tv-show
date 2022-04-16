import PlaceholderIcon from "../../assets/images/search.png";

class SearchBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#searchElement").value;
    }

    render() {
        this.innerHTML = `
        <style>
            input[type="search"] {
                background-color: #f8f8f8;
                border: 0;
            }

            input[type="search"]::placeholder {
                font-size: 0.8rem;
                color: $gray-700;
            }

            .search-container {
                display: flex;
            }

            .search-container .form-control {
                padding-left: 3rem;
            }

            .search-container .placeholder-icon {
                margin-top: 0.2rem;
                margin-left: 0.3rem;
                position: absolute;
                z-index: 2;
                display: block;
                width: 1.5rem;
                height: 1.5rem;               
                pointer-events: none;
            }
        </style>
        
        <div class="search-container form-group">   
            <span class="placeholder-icon">
                <img src="${PlaceholderIcon}" class="placeholder-icon">
            </span>        
            <input placeholder="Search the shows..." class="form-control mr-sm-2" id="searchElement" type="search">
            <button class="btn btn-warning" id="searchButtonElement" type="button">Search</button>
        </div>`;

        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);
