
export const Pagination = ({
  currentPage,
  totalOrders,
  pageSize,
  onPageChange,
}) => {
  // calculate the total number of pages
  const totalPages = Math.ceil(totalOrders / pageSize);

  const handlePrevious = () => {
    // go back one page but if at 1 it doesnt 
    onPageChange(Math.max(currentPage - 1, 1));
  };

  const handleNext = () => {
    // go forward one page but not past the last one
    onPageChange(Math.min(currentPage + 1, totalPages));
  };

  // if theres only one page, do not show the page number pagination controls
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="pagination-controls">
      <button onClick={handlePrevious} disabled={currentPage === 1}>
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};