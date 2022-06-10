import '../styles/globals.css'
import type { AppProps } from 'next/app'
import styles from '../styles/Home.module.css'
import { useState, useEffect, JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal } from 'react'

const URL_API = "https://fakestoreapi.com/products/"

export default function Home() {

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)

  const fetchAllData = async () => {
    try {
      setLoading(true)

      const response = await fetch(URL_API)
      const data = await response.json()

      if(!data) throw "ERRO NA RIQUISIÇÃO..."

      console.log(response.status, data)

    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
    
  }

  useEffect(() => {
      fetchAllData()
  }, [])

  return (
    <div className={styles.container}>
      {loading && !data && <h2>Carregando...</h2>}
      {data && data.map((products) => {
          return (<li key={products.id}>
            {products.title}
            {products.price}
            {products.category}
            {products.description}
            {products.image}
          </li>
          )
        })}
    </div>
  )

}
