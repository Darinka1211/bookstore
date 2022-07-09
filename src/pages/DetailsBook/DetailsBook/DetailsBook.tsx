import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import ButtonFavorites from '../../../components/ButtonFavorites/ButtonFavorites';
import Icon from '../../../components/Icon/Icon';
import Loading from '../../../components/Loading/Loading';
import StarRating from '../../../components/StarRating/StarRating';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks';
import {
  getDetailsBook,
  getDetailsBookStatus,
} from '../../../store/selectors/detailsBookSelectors';
import { addCart } from '../../../store/slices/cartSlice';
import { fetchBookDetails } from '../../../store/slices/detailsBooksSlice';
import { addFavorite } from '../../../store/slices/favoriteBooksSlice';

interface IBookDetails {
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
interface IFavoriteBook {
  image: string;
  title: string;
  authors: string;
  year: string;
  price: string;
  isbn13: string;
  rating: string;
}
interface IButton {
  isActive: boolean;
}

const DetailsBook = () => {
  const { id = '' } = useParams();
  const detailsBook = useAppSelector(getDetailsBook);
  const status = useAppSelector(getDetailsBookStatus);
  const navigate = useNavigate();
  const [active, setActive] = useState<string>('description');
  const [addButtonText, setAddButtonText] = useState<string>('ADD TO CART');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBookDetails(id));
  }, [dispatch, id]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleDescription = () => {
    setActive('description');
  };

  const handleAuthors = () => {
    setActive('authors');
  };

  const handleFavorite = (detailsBook: IFavoriteBook) => {
    dispatch(
      addFavorite({
        image: detailsBook.image,
        title: detailsBook.title,
        authors: detailsBook.authors,
        year: detailsBook.year,
        price: detailsBook.price,
        isbn13: detailsBook.isbn13,
        rating: detailsBook.rating,
      }),
    );
  };
  const handleCart = (detailsBook: IBookDetails) => {
    dispatch(
      addCart({
        image: detailsBook.image,
        title: detailsBook.title,
        authors: detailsBook.authors,
        year: detailsBook.year,
        price: detailsBook.price,
        isbn13: detailsBook.isbn13,
        quantity: 1,
        totalPrice: detailsBook.price.slice(1),
      }),
    );
    setAddButtonText('ADDED TO CART');
    setTimeout(() => {
      setAddButtonText('ADD TO CART');
    }, 5000);
  };

  const handleArrowDown = () => {
    document.getElementById('tab')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (status === 'loading') {
    return <Loading />;
  }
  if (status === 'error') {
    return <div>Error: </div>;
  }

  return (
    <div className="detailsBook_container">
      <div className="div__btn" onClick={handleBack}>
        <Icon id="back" />
      </div>
      <h2>{detailsBook?.title ? detailsBook.title : 'No Title'}</h2>
      <div>
        <div>
          <img src={detailsBook.image} alt={detailsBook.image} />
          <div onClick={() => handleFavorite(detailsBook)}>
            <ButtonFavorites />
          </div>
        </div>

        <div>
          <h2>
            {detailsBook.price}
            <StarRating rating={Number(detailsBook.rating)} />
          </h2>
          <p>
            Authors<span>{detailsBook.authors}</span>
          </p>
          <p>
            Publisher
            <span>
              {detailsBook.publisher}, {detailsBook.year}
            </span>
          </p>
          <p>
            Language<span>{detailsBook.language}</span>
          </p>
          <p>
            Format<span>{'Paper book / ebook (PDF)'}</span>
          </p>
          <Link to="#tab" onClick={handleArrowDown}>
            More details <Icon id="arrow-down"></Icon>
          </Link>
          <div className='div__btn__container' onClick={() => handleCart(detailsBook)}>
            <Button text={addButtonText}></Button>
          </div>
        </div>
      </div>
      <div className='tab__list' id="tab">
        <button className='activ__btn' 
        // isActive={active === 'description'} 
        onClick={handleDescription}>
          Description
        </button>
        <button 
        // isActive={active === 'authors'} 
        onClick={handleAuthors}>
          Authors
        </button>
      </div>
      <div className='div__panel'>
        {active === 'description'
          ? detailsBook.desc
          : active === 'authors'
          ? detailsBook.authors
          : 'oops'}
      </div>
      <div className='div__icons'>
        <a href="https://facebook.com">
          <Icon id="facebook" />
        </a>
        <a href="https://twitter.com">
          <Icon id="twitter" />
        </a>
        <a href="https://linkedin.com">
          <Icon id="linkedin" />
        </a>
      </div>
    </div>
  );
};

export default DetailsBook;
