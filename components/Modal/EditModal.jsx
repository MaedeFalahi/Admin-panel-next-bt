import { useState } from "react";

import { useEditProduct } from "../services/mutations";
import styles from "./ProductModal.module.css";


import React from 'react'

function EditModal({closeModalHandler}) {

    
  const EditHandler = (id) => {
    const data = {
      id: [id],
      name: "string",
      price: 0,
      quantity: 0
    }
    };


    return (
        <>
        <div className={styles.modal_backdrop}>
          <div className={styles.modal}>
         <form  className={styles.product_form} onSubmit={EditHandler}>
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

export default EditModal;