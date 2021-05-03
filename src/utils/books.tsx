import { isEmpty, map, get } from "lodash"

export const transformBooksResponseToBookProps = (booksResponse: any) => {
    if (isEmpty(booksResponse)) {
        return [];
    }

    return map(booksResponse, book => ({
        id: get(book, 'id', null),
        title: get(book, 'volumeInfo.title', null),
        authors: get(book, 'volumeInfo.authors', []),
        coverUrl: get(book, 'volumeInfo.imageLinks.smallThumbnail', null),
        description: get(book, 'volumeInfo.description', null)
    }));
}