export const baseURL = 'https://api.thecatapi.com/v1'

export const config = {
    headers:{
        'x-api-key' : '26be2bb2-7860-4c85-937d-13e8c705a202'
    }
}

export const categoryImageFetcher = async (id) => {
    return (await fetch(`${baseURL}/images/search?category_ids=${id}`)).json()
}