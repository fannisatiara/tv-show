import '../component/tvshow-category.js';
import '../component/tvshow-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const tvshowListElement = document.querySelector("tvshow-list");
    const clearFilterElement = document.querySelector("#clearFilter");
    const loaderElement = document.querySelector("#loader-text");

    const onButtonSearchClicked = () => {
        searchTvshow(searchElement.value);
    };

    const searchTvshow = async (keyword) => {
        loaderElement.style.display = 'block';
        try {
            const result = await DataSource.searchTvshow(keyword);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    }

    const renderResult = results => {
        loaderElement.style.display = 'none';
        tvshowListElement.tvshow = results;
    };

    const fallbackResult = message => {
        loaderElement.style.display = 'none';
        tvshowListElement.renderError(message);
    };

    searchTvshow('show');
    searchElement.clickEvent = onButtonSearchClicked;

    const checkbox = document.querySelectorAll("input[type=checkbox]")
    checkbox.forEach(item => {
        item.addEventListener("click", function () {
            const category = this.getAttribute("data-item");
            searchTvshow(category);
        });
    })

    clearFilterElement.addEventListener("click", function () {
        const checkbox = document.querySelectorAll("input[type=checkbox]")
        checkbox.forEach(item => {
            item.checked = false;
        })
    });
};

export default main;