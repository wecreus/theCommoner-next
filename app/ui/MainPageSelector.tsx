type MainPageSelectorProps = {
  totalPages: number;
  currentPage: number;
  handlePageChange: (page: number) => void;
};

const MainPageSelector = ({
  totalPages,
  currentPage,
  handlePageChange,
}: MainPageSelectorProps) => {
  return (
    <div className="page-selector__hidden">
      <div className="page-selector">
        {[...Array(totalPages)].map((e, i) => (
          <div
            key={`pageselector${i}`}
            className={`page-selector__page ${
              currentPage === i ? "page-selector__page-selected" : ""
            }`}
            onClick={() => handlePageChange(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default MainPageSelector;
