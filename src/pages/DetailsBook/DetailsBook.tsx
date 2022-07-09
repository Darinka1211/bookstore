import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import ButtonFavorites from '../../components/ButtonFavorites/ButtonFavorites';
import Icon from '../../components/Icon/Icon';
import Loading from '../../components/Loading/Loading';
import StarRating from '../../components/StarRating/StarRating';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import {
  getDetailsBook,
  getDetailsBookStatus,
} from '../../store/selectors/detailsBookSelectors';
import { addCart } from '../../store/slices/cartSlice';
import { fetchBookDetails } from '../../store/slices/detailsBooksSlice';
import { addFavorite } from '../../store/slices/favoriteBooksSlice';
import {
  StyledAddFovorite,
  StyledArrowDown,
  StyledBackButton,
  StyledBookImage,
  StyledBookInfo,
  StyledButtonContainer,
  StyledDetailsBook,
  StyledIcons,
  StyledIconsItem,
  StyledMainCointainer,
  StyledParams,
  StyledPrice,
  StyledTab,
  StyledTabList,
  StyledTabPanel,
  StyledTitle,
} from "./styles_sass";

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
    <StyledDetailsBook>
      <StyledBackButton onClick={handleBack}>
        <Icon id="back" />
      </StyledBackButton>
      <StyledTitle>
        {detailsBook?.title ? detailsBook.title : "No Title"}
      </StyledTitle>
      <StyledMainCointainer>
        <StyledBookImage>
          <img src={detailsBook.image} alt={detailsBook.image} />
          <StyledAddFovorite onClick={() => handleFavorite(detailsBook)}>
            <ButtonFavorites />
          </StyledAddFovorite>
        </StyledBookImage>

        <StyledBookInfo>
          <StyledPrice>
            {detailsBook.price}
            <StarRating rating={Number(detailsBook.rating)} />
          </StyledPrice>
          <StyledParams>
            Authors<span>{detailsBook.authors}</span>
          </StyledParams>
          <StyledParams>
            Publisher
            <span>
              {detailsBook.publisher}, {detailsBook.year}
            </span>
          </StyledParams>
          <StyledParams>
            Language<span>{detailsBook.language}</span>
          </StyledParams>
          <StyledParams>
            Format<span>{"Paper book / ebook (PDF)"}</span>
          </StyledParams>
          <StyledArrowDown to="#tab" onClick={handleArrowDown}>
            More details <Icon id="arrow-down"></Icon>
          </StyledArrowDown>
          <StyledButtonContainer onClick={() => handleCart(detailsBook)}>
            <Button text={addButtonText}></Button>
          </StyledButtonContainer>
        </StyledBookInfo>
      </StyledMainCointainer>
      <StyledTabList id="tab">
        <StyledTab
          isActive={active === "description"}
          onClick={handleDescription}
        >
          Description
        </StyledTab>
        <StyledTab isActive={active === "authors"} onClick={handleAuthors}>
          Authors
        </StyledTab>
      </StyledTabList>
      <StyledTabPanel>
        {active === "description"
          ? detailsBook.desc
          : active === "authors"
          ? detailsBook.authors
          : "oops"}
      </StyledTabPanel>
      <StyledIcons>
        <StyledIconsItem href="https://facebook.com">
          <Icon id="facebook" />
        </StyledIconsItem>
        <StyledIconsItem href="https://twitter.com">
          <Icon id="twitter" />
        </StyledIconsItem>
        <StyledIconsItem href="https://linkedin.com">
          <Icon id="linkedin" />
        </StyledIconsItem>
      </StyledIcons>
    </StyledDetailsBook>
  );
};

export default DetailsBook;
