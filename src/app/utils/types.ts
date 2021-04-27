export interface Item {
    id: string
    selfLink: string
    volumeInfo: {
        title: string
        authors: string[]
        publishedDate: string
        pageCount: number
        imageLinks: {
            thumbnail: string
        }
        language: string
    },
    saleInfo: {
        buyLink: string
    }
}

export interface APIResponse {
    items: Item[]
}