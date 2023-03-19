import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import PostItem from "../PostItem";
import PropTypes from 'prop-types';

export default function PaginatedItems({ items, itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {currentItems &&
        currentItems.map((post) => (
            <PostItem post={post} key={post.id} />
        ))}
      <nav className="mt-5">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="previous"
          renderOnZeroPageCount={null}
          className="pagination justify-content-center"
          pageClassName="page-item"
          nextClassName="page-item"
          previousClassName="page-item"
          pageLinkClassName="page-link"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
        />
      </nav>
    </>
  );
}

PaginatedItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  itemsPerPage: PropTypes.number
}