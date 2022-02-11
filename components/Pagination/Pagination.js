import React from 'react'
import classnames from 'classnames'
import { usePagination, DOTS } from './UsePagination'
import styles from '../../styles/Table.module.css'
const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  })
  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }
  const onNext = () => {
    onPageChange(currentPage + 1)
  }
  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }
  let lastPage = paginationRange[paginationRange.length - 1]
  return (
    <ul className={classnames('pagination_container', { [className]: className })}>
      <li
        className={classnames('pagination_item', {
          pagination_item_disabled: currentPage === 1
        })}
        onClick={onPrevious}
        key="paginationleft"
      >
        <div className="arrow left">
          <i className="fas fa-arrow-left"></i>
        </div>
      </li>
      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <li className="pagination_item dots">&#8230;</li>;
        }
        return (
          <li
            className={classnames('pagination_item', {
              pagination_item_selected: pageNumber === currentPage
            })}
            onClick={() => onPageChange(pageNumber)}
            key={'pagination'+pageNumber}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames('pagination_item', {
          pagination_item_disabled: currentPage === lastPage
        })}
        onClick={onNext}
        key="paginationright"
      >
        <div className="arrow right">
          <i className="fas fa-arrow-right"></i>
        </div>
      </li>
    </ul>
  )
}
export default Pagination
