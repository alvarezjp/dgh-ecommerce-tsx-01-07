import Close from "../../../assets/close.svg"
import styles from "./CartModal.module.css"
import style from "./Table.module.css"


export const CartModal = ({handleShowCartModal}) => {
  return (
    <div className={styles.modalButtonContainer}>
        <button className={styles.modalCloseButton} onClick={handleShowCartModal}>
            <img src={Close} alt="Close" width={50} height={50}/>
        </button>
        <table className={style.modalTable}>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Delete</th>
                    <th>Quantity</th>
                    <th>Add</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>
                        <button className={style.modalButtonRemove}>-1</button>
                    </td>
                    <td>12</td>
                    <td><button className={style.modalButtonAdd}>+1</button></td>
                </tr>
            </tbody>
        </table>
        <div className={style.modalTotalContainer}>
            <h3>Total: 400,00</h3>
        </div>
        <div className={styles.modalButtonContainer}>
            <button>Checkout</button>
        </div>
    </div>
  )
}
