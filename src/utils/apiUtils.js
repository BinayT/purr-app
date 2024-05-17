export const baseURL = 'https://api.thecatapi.com/v1'

export const config = {
    headers:{
        'x-api-key' : 'live_TFbq7sAkKyI1p3hAIemsPpWoqFaXv8cgbpie99GmnYOtc0GHvW1skPnSzE94Ey2j'
    }
}

export const categoryImageFetcher = async (id) => {
    const response = await fetch(`${baseURL}/images/search?category_ids=${id}`);
    const jsonData = await response.json();

    const modifiedData = {
        catID: id,
        ...jsonData
    };

    return modifiedData;
}
