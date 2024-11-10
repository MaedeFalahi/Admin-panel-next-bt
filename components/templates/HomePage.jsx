import { useState } from 'react';
import ProductModal from '../Modal/ProductModal';
import Delete from '../modules/Delete';
import Edit from '../modules/Edit';
import { useGetAllProducts } from '../services/Query'
import styles from './HomePage.module.css'

function HomePage() {
    const {data , error, isError, isPending  } = useGetAllProducts();
    const [addModal , setAddModal] = useState(null);
    const [page, setPage] = useState(1);

     if (isPending) return <p>loading...</p>
     if (isError)return <div>went wrong</div>
     if (error) return <div>went wrong</div>


    const openModalHandler  = () =>{
        setAddModal(true);
    }
    const closeModalHandler = () => {
      setAddModal(false);
    };

  return (
    <>
    {addModal && <ProductModal closeModalHandler={closeModalHandler} />}
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
        <button onClick={openModalHandler}>افزودن محصول</button>
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
        <tbody>

        {isError ?(
            <div>went wrong</div>
        ):
        data?.data.map((product) => (
          <tr key={product?.id}>
          <td>{product?.name}</td>
          <td>{product?.quantity}</td>
          <td>{product?.price} تومان</td>
          <td colSpan="2">{product?.id}</td>
          <td className={styles.delete}>
            <Delete key={product.id} product={product} />
            <Edit key={product.id} product={product} />
             </td>
        </tr>
        ))}

        </tbody>
      </table>
    </div>
    <div className={styles.pagination}>
    <button onClick={() => setPage(2)}>2</button>
    </div>
  </>
    )
}

export default HomePage