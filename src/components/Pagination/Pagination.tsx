import { useAppSelector } from "../../store/hooks/hooks";
import { getSearchBooksCurrentPage } from "../../store/selectors/selector";
import { createPages } from "./pageCreator";
import Icon from "../Icon/Icon";
import { StyledPagination, StyledNavigationButton, StyledNumberButton, StyledNumberButtonList } from "./PaginationStyled"

interface IPagination {
    handlePrevPage: () => void;
    handlePage: (item: number) => void;
    handleNextPage: () => void;
    totalPage: number;
  }
  
  const Pagination = ({
    handlePrevPage,
    handlePage,
    handleNextPage,
    totalPage,
  }: IPagination) => {
    const searchBooksCurrentPage = useAppSelector(getSearchBooksCurrentPage);
    const ArrayOfTotalPage: [] = [];
  
    createPages(ArrayOfTotalPage, totalPage, searchBooksCurrentPage);
    return (
      <StyledPagination>
        <StyledNavigationButton type="button" onClick={handlePrevPage}>
          <Icon id="prev" /> Prev
        </StyledNavigationButton>
        <StyledNumberButtonList>
          {ArrayOfTotalPage.map((item) => (
            <StyledNumberButton
               isActive={searchBooksCurrentPage === item}
              key={item}
              onClick={() => handlePage(item)}
            >
              {item}
            </StyledNumberButton>
          ))}
        </StyledNumberButtonList>
  
        <StyledNavigationButton type="button" onClick={handleNextPage}>
          Next <Icon id="next" />
        </StyledNavigationButton>
      </StyledPagination>
    );
  };
  
  export default Pagination;