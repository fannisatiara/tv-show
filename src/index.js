import 'bootstrap';
import "regenerator-runtime";
import "./scss/import.scss";

import "./script/component/header-navigation.js";
import "./script/component/header-jumbotron.js";
import "./script/component/dev-card.js";

import "./script/component/detail-breadcrumb.js";
import "./script/component/detail-header.js";

import main from "./script/view/main.js";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
document.addEventListener("DOMContentLoaded", main);