import "./Pagination.css";
import LeftArrowIcon from "../../Icon/LeftArrowIcon/LeftArrowIcon.jsx";
import RightArrowIcon from "../../Icon/RightArrowIcon/RightArrowIcon.jsx";

const Pagination = ({
  totalPages,
  totalItems,
  currentPage,
  loading,
  setCurrentPage,
}) => {
  console.log(
    "totatl items: ",
    totalItems,
    "total pages: ",
    totalPages,
    " loading: ",
    loading
  );

  if (loading || totalItems == 0) {
    return <></>;
  }

  const handleLeftArrowClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleRightArrowClick = () => {
    if (currentPage <= totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageNumberClick = (number) => {
    console.log("handle page number click", number);

    setCurrentPage(number);
  };
  const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  console.log("pagesArray: ", pagesArray);

  const pageNumberList = pagesArray.map((number) => {
    return (
      <li
        key={number}
        onClick={() => handlePageNumberClick(number)}
        className={`pagination__page-number ${
          number == currentPage ? "active" : ""
        }`}
      >
        {number}
      </li>
    );
  });
  console.log("pageNumberLost: ", pageNumberList);

  return (
    <div className='pagination'>
      <div className='pagination__left-arrow' onClick={handleLeftArrowClick}>
        {LeftArrowIcon("8px", "14px")}
      </div>
      <ul className='pagination__page-numbers'>{pageNumberList}</ul>
      <div className='pagination__right-arrow' onClick={handleRightArrowClick}>
        {RightArrowIcon("8px", "14px")}
      </div>
    </div>
  );

  // let pageNumber = [];

  // for(let i=1;i<=Math.ceil(totalTasks / taskPerPage);i++){
  //     pageNumber.push(i);
  // }

  // const PageArry=(currentPage,total)=>{
  //     let from=0
  //     let to=0
  //     if(currentPage<4){
  //         return [0,7]
  //     }
  //     if(currentPage+4>=total){
  //         if(currentPage<4){
  //             return [0,7]
  //         }
  //         from=total-8
  //         return [from,total-1]
  //     }
  //     from=currentPage-4
  //     to=currentPage+3
  //     return [from,to]
  // }

  // const lastPageHandler=()=>{
  //     if (currentPage>1){setCurrentPage(currentPage-1)}

  // }

  // const nextPageHandler=()=>{
  //     if (currentPage<pageNumber[pageNumber.length -1]){setCurrentPage(currentPage+1)}
  // }

  // const paginate=pageNumber=>setCurrentPage(pageNumber);

  // return (
  //     <div className={'Pagination'}>
  //                 <span onClick={lastPageHandler}  className='lef-arrow'>
  //                     {LeftArrowIcon(8, 14)}
  //                     </span>
  //         <ul className='pag-numbers'>
  //             {pageNumber.slice(PageArry(currentPage,pageNumber.length)[0],PageArry(currentPage,pageNumber.length)[1]).map(number=> (
  //                 <li onClick={()=>paginate(number)} key={number} className={`pag-number ${currentPage==number ? 'active': ''}`}>{number}</li>
  //             ))}
  //         </ul>
  //         <span onClick={nextPageHandler}>
  //             {RightArrowIcon(8, 14)}
  //         </span>
  //     </div>
  // )
};

export default Pagination;
