import { useAppSelector } from "../../store/hooks/hooks";
import { getSearchBooksCurrentPage } from "../../store/selectors/selector";
import { createPages } from "./pageCreator";
import Icon from "../Icon/Icon";
import "./Pagination.scss"

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
      <div className="pagination_div">
        <button className="btn_nav" type="button" onClick={handlePrevPage}>
          <Icon id="prev" /> Prev
        </button>
        <div className="page__list">
          {ArrayOfTotalPage.map((item) => (
            <button className="btn_pages"
              // isActive={searchBooksCurrentPage === item}
              key={item}
              onClick={() => handlePage(item)}
            >
              {item}
            </button>
          ))}
        </div>
  
        <button className="btn__nav" type="button" onClick={handleNextPage}>
          Next <Icon id="next" />
        </button>
      </div>
    );
  };
  
  export default Pagination;