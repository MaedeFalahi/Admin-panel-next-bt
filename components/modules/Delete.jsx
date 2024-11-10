
import { useDeleteProduct } from "../services/mutations";

function Delete({ product  }) {

    const { mutate , data } = useDeleteProduct();

  const deleteHandler = (id) => {
    const data = {
      ids: [id],
    };

    console.log(data);

    mutate(
      { data },
      {
        onSuccess: (data) => {
          console.log(data);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };


  return (
    <>
                    <button onClick={() => deleteHandler(product?.id)}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 4.98333C14.725 4.70833 11.9333 4.56667 9.15 4.56667C7.5 4.56667 5.85 4.65 4.2 4.81667L2.5 4.98333" stroke="#F43F5E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.08325 4.14167L7.26659 3.05001C7.39992 2.25834 7.49992 1.66667 8.90825 1.66667H11.0916C12.4999 1.66667 12.6083 2.29167 12.7333 3.05834L12.9166 4.14167" stroke="#F43F5E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.7082 7.61667L15.1665 16.0083C15.0748 17.3167 14.9998 18.3333 12.6748 18.3333H7.32484C4.99984 18.3333 4.92484 17.3167 4.83317 16.0083L4.2915 7.61667" stroke="#F43F5E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.6084 13.75H11.3834" stroke="#F43F5E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.91675 10.4167H12.0834" stroke="#F43F5E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
    </>
  )
}

export default Delete