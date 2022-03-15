import React, { useState, useMemo } from 'react'
import Ingredient from './Ingredient'
import Pagination from '../Pagination/Pagination'
import styles from '../../styles/Table.module.css'
let PageSize = 5
export default function Ingredients(props) {
  const [currentPage, setCurrentPage] = useState(1)
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    return props.data.ingredients.slice(firstPageIndex, lastPageIndex)
  }, [currentPage])
  return (
    <section>
      <div className="content_wrap">
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.tr}>
              <td className={styles.thead_title_td}>
                Ingredients
                <a className={styles.add} href="/comida/create">
                  <i className="fas fa-plus"></i>&nbsp;
                  Add
                </a>
              </td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td_icon}>&nbsp;</td>
              <td className={styles.td_number}>Quantity</td>
              <td className={styles.td_200px}>English</td>
              <td className={styles.td_200px}>Spanish</td>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {currentTableData.map(item => (
              <Ingredient data={item} key={item.id} />
            ))}
          </tbody>
          <tfoot className={styles.tfoot}>
            <tr className={styles.tr}>
              <td className={styles.td_pagination}>
                <Pagination
                  className="pagination-bar"
                  currentPage={currentPage}
                  totalCount={props.data.ingredients.length}
                  pageSize={PageSize}
                  onPageChange={page => setCurrentPage(page)}
                />
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  )
}
