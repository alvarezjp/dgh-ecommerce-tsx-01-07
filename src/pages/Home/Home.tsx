import { useEffect, useState } from "react"
import {Hero} from "../../Components/ui/Hero"
import styles from "./Home.module.css"
import { CartProduct } from "../../Components/ui/CardProduct";
import { getProducts } from "../../service";
import type { Products } from "../../interface";

const Home = () => {

  const [products,setProducts] = useState<Products[]>([]);
  const [error,setError] = useState(false);
  const [isLoading,setIsLoading] = useState(true);

  

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data)
    }).catch(()=>{
      setError(true)
    }).finally(()=>{
      setIsLoading(false)
    })
  },[])

  return (
    <>
    <Hero/>
    {isLoading && <p>Loading...</p>}
    {error && <p>Somethin went wront</p>}
    <div className={styles.container}>
      {products.map((product) => (
      <CartProduct key={product.tail} product={product}/>
      ))}
    </div>
    
    </>
  )
}

export default Home