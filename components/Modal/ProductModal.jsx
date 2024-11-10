import { useState } from "react";

import { useCreateProduct } from "../services/mutations";
import styles from "./ProductModal.module.css";

function ProductFormModal({closeModalHandler}) {

  const [form, setForm] = useState({
    name: "",
    price: 0,
    quantity: 0,
  });

  const { mutate } = useCreateProduct();

  const changeHandler = (event) => {
    setForm((form) => ({ ...form, [event.target.name]: event.target.value }));
  };

  const addHandler = (event) => {
    event.preventDefault();

    const { name, price } = form;

    if (!name || !price) return;

    mutate(form, {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (error) => console.log(error),
    });
  };



  return (
    <>
    <div className={styles.modal_backdrop}>
      <div className={styles.modal}>
     <form  className={styles.product_form} onSubmit={addHandler}>
      <div className={styles.form_fields}>
        <label htmlFor="name">نام کالا</label>
        <input
         type="text"
          name="name"
          placeholder="نام کالا را وارد کنید"
          value={form.name}
          onChange={changeHandler}
        />

        <label htmlFor="quantity">تعداد موجودی</label>
        <input 
        type="number" 
        name="quantity"
        min="0"
        placeholder="تعداد موجودی را وارد کنید"
        value={form.quantity}
        onChange={changeHandler}
        />

        <label htmlFor="price">قیمت</label>
        <input
         type="number"
          name="price"
          min="0"
          placeholder="قیمت را وارد کنید"
          value={form.price}
          onChange={changeHandler}  
            />
      </div>

      <div className={styles.form_buttons}>
        <button type="submit">افزودن محصول</button>
        <button type="button" onClick={closeModalHandler}>
          انصراف
        </button>
      </div>
    </form>

    </div>
    </div>
    </>
  )
}

export default ProductFormModal;