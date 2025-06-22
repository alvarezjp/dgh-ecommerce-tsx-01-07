import type { FC } from "react"
import Close from "../../../assets/close.svg"
import styles from "./CartModal.module.css"
import style from "./Table.module.css"
import useCartContext from "../../../hooks/useCartContext"
import type { CartProductIterface } from "../../../interface"

interface Props {
    handleShowCartModal: () => void
}

export const CartModal: FC<Props> = ({ handleShowCartModal }) => {

    const { state: { cartItems }, dispatch } = useCartContext()

    const removeToCart = (item: CartProductIterface) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: item })
    }
    const addToCart = (item: CartProductIterface) => {
        dispatch({ type: "ADD_TO_CART", payload: item })
    }

    const totalPay = () => {
      const total = cartItems.reduce((acc,item)=> {
        return acc +item.price * item.quantity
      },0)
      return total
    }


    return (
        <div className={styles.modalButtonContainer}>
            <button className={styles.modalCloseButton} onClick={handleShowCartModal}>
                <img src={Close} alt="Close" width={50} height={50} />
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
                    {cartItems.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <p>{item.name}</p>
                            </td>
                            <td>
                                <button
                                    className={style.modalButtonRemove}
                                    onClick={() => removeToCart(item)}
                                >
                                    -1
                                </button>
                            </td>
                            <td>
                                <p>{item.quantity}</p>
                            </td>
                            <td>
                                <button
                                    className={style.modalButtonAdd}
                                     onClick={() => addToCart(item)}
                                >+1
                                </button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={style.modalTotalContainer}>
                <h3> ${totalPay()} </h3>
            </div>
            <div className={styles.modalButtonContainer}>
                <button>Checkout</button>
            </div>
        </div>
    )
}
