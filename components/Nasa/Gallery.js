import React, { useState, useMemo } from 'react'
import Pagination from '../Pagination/Pagination'
import Photo from './Photo'
import styles from '../../styles/Gallery.module.css'
let PageSize = 10
export default function Gallery(props) {
  const [currentPage, setCurrentPage] = useState(1)
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    return props.data.photos.slice(firstPageIndex, lastPageIndex)
  }, [currentPage])
  return (
    <div className={styles.gallery}>
      <div className={styles.empty_photo}>
        <i className="fa-solid fa-image"></i>
      </div>
      <div className={styles.empty_label}>
        {props.data.photos.length} Photos
      </div>
      <div className={styles.wrap_pagination}>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={props.data.photos.length}
          pageSize={PageSize}
          onPageChange={page => setCurrentPage(page)}
        />
      </div>
      <div className={styles.collection}>
        {currentTableData.map(item => (
          <Photo data={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}
