import axios from 'axios';

export interface IBook {
  image: string;
  isbn13: string;
  price: string;
  subtitle: string;
  title: string;
  url: string;
}
export interface IBookDetails {
  authors: string;
  desc: string;
  error: string;
  image: string;
  isbn10: string;
  isbn13: string;
  language: string;
  pages: string;
  pdf: { [key: string]: string };
  price: string;
  publisher: string;
  rating: string;
  subtitle: string;
  title: string;
  url: string;
  year: string;
}
export interface ISearchBooksSlice {
  results: {
    error: string | null;
    total: string;
    books: IBook[];
  };
  totalPage: number;
  currentPage: number;
  error: any;
  status: RequestStatusType;
}
export interface INewBooksSlice {
  results: INewBooksApi;
  error: any;
  status: RequestStatusType;
}
export interface IDetailsBookSlice {
  result: IBookDetails;
  error: any;
  status: RequestStatusType;
}
export interface INewBooksApi {
  books: IBook[];
  error: null;
  total: string;
}
export interface IBookDetailsApi extends IBookDetails {}

export interface ISearchBooksApi extends INewBooksApi {
  page: string;
}
type RequestStatusType = 'idle' | 'loading' | 'success' | 'error';

class BookService {
  private readonly API_URL = 'https://api.itbook.store/1.0/';

  private api = axios.create({
    baseURL: this.API_URL,
  });

  public async getNewBooks(): Promise<INewBooksApi> {
    const { data } = await this.api.get<INewBooksApi>('/new');
    return data;
  }

  public async getBookDetails(isbn: string): Promise<IBookDetailsApi> {
    const { data } = await this.api.get<IBookDetailsApi>(`/books/${isbn}`);
    return data;
  }

  public async getBooksBySearch(title: string, page: string): Promise<ISearchBooksApi> {
    const { data } = await this.api.get<ISearchBooksApi>(`/search/${title}/${page}`);
    return data;
  }
}
export const bookApi = new BookService();
