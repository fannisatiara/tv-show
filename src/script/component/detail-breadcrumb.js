class DetailBreadcrumb extends HTMLElement {

    set currentPage(value) {
        this.setAttribute('currentpage', value);
        this.render();
    }

    render() {
        this.currentpage = this.getAttribute("currentpage") || null;

        this.innerHTML = `
        <style>
            .breadcrumb {
                font-size: 0.7rem;
                background-color: transparent;
                padding: 0;
            }
            .breadcrumb .breadcrumb-item a {
                color: #FFD32D;
            }
            .breadcrumb .breadcrumb-item.active {
                color: #FFC300;
                font-weight: bold;
            }
        </style>
        
        <nav class="d-flow-root" aria-label="breadcrumb">
            <ol class="breadcrumb mt-2 float-left">
                <li class="breadcrumb-item"><a href="#">Detail</a></li>
                <li class="breadcrumb-item active" aria-current="page">${this.currentpage}</li>
            </ol>
            <button id="backToMain" class="btn btn-outline-warning rounded-pill float-right">Back</button>
        </nav>`;

        $('#backToMain').click(function() {
            $('main').show();
            $('.details').hide();
        });
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("detail-breadcrumb", DetailBreadcrumb);
