import IconLogo from "../../assets/images/favicon.png";

class HeaderNavigation extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
        <style>           
            .navbar {               
                background-color: #FFB72B;
                border-radius: 1.2rem;
                box-shadow: rgba(190, 113, 13, 0.15) 3px 5px 15px 5px;              
            }
            .icon-logo {
                width: 40px;
                margin-bottom: 0.3rem;           
            }

            .navbar .navbar-brand {
                font-family: "Open Sans", 'Trebuchet MS';
                font-size: 1.7rem;
                font-weight: lighter;
                margin-right: 8rem;
                margin-left: 2rem;
            }

            .navbar .nav-item {
                margin-left: 2rem;
                font-family: "Open Sans", 'Franklin Gothic Medium';
            }

            .navbar .nav-item.active {
                font-weight: bold;
            }

            .navbar-nav .nav-sidebar-item {
                font-family: "Montserrat", 'Trebuchet MS';
                font-size: 0.8rem;
                margin-top: 0.5rem;
            }
            
        </style>
        <header class="container my-3">
            <nav class="navbar navbar-expand-lg navbar-light p-0">
                <a class="navbar-brand" href="#">
                    <img src="${IconLogo}" class="icon-logo"> TVSHOWs
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">People</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Discover</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Support</a>
                        </li>                        
                        <li class="nav-item">
                            <a class="nav-link" href="#">More</a>
                        </li>                       
                    </ul>                   
                </div>
            </nav>
        </header>`;
    }
}

customElements.define("header-navigation", HeaderNavigation);
