import { Pagination } from "react-bootstrap";

export const PaginationControls = ({
  currentPage,
  totalOrders,
  pageSize,
  onPageChange,
}) => {
  // calculate the total number of pages
  const totalPages = Math.ceil(totalOrders / pageSize)

    // if theres only one page, do not show the page number pagination controls
  if (totalPages <= 1) {
    return null;
  }

  const handleFirst = () => {
  onPageChange(1)
}

  const handlePrevious = () => {
    // go back one page but if at 1 it doesnt 
    onPageChange(Math.max(currentPage - 1, 1))
  };

  const handleNext = () => {
    // go forward one page but not past the last one
    onPageChange(Math.min(currentPage + 1, totalPages))
  }

  const handleLast = () => {
    onPageChange(totalPages)
  }

  const items = []
  for (let number = 1; number <= totalPages; number ++) {
    items.push(
      <Pagination.Item
      key={number}
      active={number === currentPage}
      onClick={() => onPageChange(number)}
      >
      {number}
      </Pagination.Item>

    )
  }

  return (
  <Pagination size="sm">
      <Pagination.First
        onClick={handleFirst}
        disabled={currentPage === 1}
      />
      <Pagination.Prev
        onClick={handlePrevious}
        disabled={currentPage === 1}
      />

      {items}

      <Pagination.Next
        onClick={handleNext}
        disabled={currentPage === totalPages}
      />
      <Pagination.Last
        onClick={handleLast}
        disabled={currentPage === totalPages}
      />
    </Pagination>
  )
};