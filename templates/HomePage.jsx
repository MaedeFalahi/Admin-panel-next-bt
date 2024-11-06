import styles from './HomePage.module.css'

function HomePage() {
  return (
    <>
    
    <div className={styles.products_container}>
      <div className={styles.products_navbar}>
        <div className={styles.search_box}>
          <img src="search.svg" alt="search" />
          {/* <input type="text" placeholder="جستجو کالا" value={search} onChange={handleSearchChange} /> */}
        </div>
        <div className={styles.profile_info}>
          <img src="profile.jpg" alt="profile" />
          <div>
            <p>میلاد عظمی</p>
            <span>مدیر</span>
          </div>
        </div>
      </div>


      <div className={styles.products_header}>
        <div>
          <img src="setting.svg" alt="setting" />
          <span>مدیریت کالا</span>
        </div>
        <button onClick={() => openModalHandler("add")}>افزودن محصول</button>
      </div>
      <table className={styles.products_table}>
        <thead>
          <tr>
            <th>نام کالا</th>
            <th>موجودی</th>
            <th>قیمت</th>
            <th colSpan="2">شناسه کالا</th>
            <th></th>
          </tr>
        </thead>
        {/* <tbody>
          {isLoading ? (
            <tr>
              <td colSpan="6">
                <Loader />
              </td>
            </tr>
          ) : products?.data.data.length ? (
            products.data.data.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{sp(product.quantity)}</td>
                <td>{sp(product.price)} تومان</td>
                <td colSpan="2">{e2p(product.id)}</td>
                <td>
                  <img src="edit.svg" alt="ویرایش" style={{ marginLeft: "14px" }} onClick={() => openModalHandler("edit", product.id)} />
                  <img src="trash.svg" alt="حذف" onClick={() => openModalHandler("delete", product.id)} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className={styles.no_products}>
                محصولی یافت نشد
              </td>
            </tr>
          )}
        </tbody> */}
      </table>
    </div>
    {/* <div className={styles.pagination}>{paginationButtons}</div> */}
  </>
    )
}

export default HomePage