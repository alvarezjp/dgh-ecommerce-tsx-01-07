import { Toaster } from "sonner"
import { CardCredit } from "../../Components/ui/CardCredit/CardCredit"
import { Table } from "../../Components/ui/Table/Table"
import styles from "./Checkout.module.css"

function Checkout() {
  return (
    <div className={styles.container}>
      <Toaster richColors visibleToasts={1} />
      <h1 className={styles.title}>Checkout</h1>
      <div className={styles.grid}>
        <div className={styles.tableContainer}>
          <Table />
        </div>
        <div>
          <CardCredit />
        </div>
      </div>
    </div>
  )
}

export default Checkout