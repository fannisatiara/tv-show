class DataSource {
    static searchTvshow(keyword) {
        return fetch(`https://api.themoviedb.org/3/search/tv?api_key=76e6c22d884d081696ff4d738eda69cd&language=en-US&query=${keyword}&include_adult=false`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`${keyword} is not found`)
                }
            })
    }

    static informationTvshow(id) {
        return fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=76e6c22d884d081696ff4d738eda69cd&language=en-US`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if (responseJson) {
                    return Promise.resolve(responseJson);
                } else {
                    return Promise.reject(`${id} is not found`)
                }
            })
    }
}

export default DataSource;
