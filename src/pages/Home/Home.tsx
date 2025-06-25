import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { CartProduct } from "../../Components/ui/CardProduct";
import { Hero } from "../../Components/ui/Hero";
import { getProducts } from "../../service";
import styles from "./Home.module.css";
import { useState } from "react";

const Home = () => {
  const [page, setPage] = useState(1)

  const { data, isLoading, error, isPlaceholderData } = useQuery({
    queryKey: ['products', page],
    queryFn: () => getProducts(page),
    placeholderData: keepPreviousData
  })

  // const [products,setProducts] = useState<Product[]>([]);
  // const [error,setError] = useState(false);
  // const [isLoading,setIsLoading] = useState(true);



  // useEffect(() => {
  //   getProducts().then((data) => {
  //     setProducts(data)
  //   }).catch(()=>{
  //     setError(true)
  //   }).finally(()=>{
  //     setIsLoading(false)
  //   })
  // },[])

  return (
    <>
      <Hero />
      <Toaster closeButton />
      {isLoading && <p>Loading...</p>}
      {error && <p>Somethin went wront</p>}
      <div className={styles.container}>
        {data?.map((product) => (
          <CartProduct key={product.tail} product={product} />
        ))}
      </div>
      <div className={styles.paginationContainer}>
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className={styles.paginationButton}>
          Previus page</button>
        <div className={styles.paginationActive}>
          <span>{page}</span>
        </div >
        <button
          onClick={() => setPage(page + 1)}
          
          className={styles.paginationButton}>
          Next page</button>
      </div>


    </>
  )
}

export default Home