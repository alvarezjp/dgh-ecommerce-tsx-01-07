import { useNavigate } from 'react-router-dom'
import styles from './Dashboard.module.css'
import React, { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import type { Product } from '../../interface';
import { createProduct } from '../../service';

const Dashboard = () => {

    const navigate = useNavigate();

    const [product, setProduct] = useState({
        amiiboSeries: '',
        character: '',
        gameSeries: '',
        head: '',
        image: '',
        name: '',
        releaseDate: '',
        tail: '',
        type: '',
        price: 0
    })

    useEffect(() => {
        const userLogin = localStorage.getItem("userLogin")
        if (!userLogin) {
            navigate('login')
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("userLogin");
        navigate("/login")
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const mutation = useMutation<Product, Error, Product>({
        mutationFn: (newProduct) => createProduct(newProduct)
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        mutation.mutate(product)
    }

    return (
        <div className={styles.container}>
            <div>
                <h1>Dashboard</h1>
                <button onClick={handleLogout}>Logout</button>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={styles.formControlLogin}>
                    <label htmlFor="amiiboSeries">amiiboSeries</label>
                    <input type="text"
                        id="amiiboSeries"
                        name="amiiboSeries"
                        value={product.amiiboSeries}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.formControlLogin}>
                    <label htmlFor="character">Character</label>
                    <input type="character"
                        id="character"
                        name="character"
                        value={product.character}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.formControlLogin}>
                    <label htmlFor="gameSeries">Game Series</label>
                    <input type="text"
                        id="gameSeries"
                        name="gameSeries"
                        value={product.gameSeries}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.formControlLogin}>
                    <label htmlFor="head">Head</label>
                    <input type="text"
                        id="head"
                        name="head"
                        value={product.head}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.formControlLogin}>
                    <label htmlFor="image">Image</label>
                    <input type="url"
                        id="image"
                        name="image"
                        value={product.image}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.formControlLogin}>
                    <label htmlFor="name">Name</label>
                    <input type="text"
                        id="name"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.formControlLogin}>
                    <label htmlFor="releaseDate">Release Date</label>
                    <input type="date"
                        id="releaseDate"
                        name="releaseDate"
                        value={product.releaseDate}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.formControlLogin}>
                    <label htmlFor="tail">Tail</label>
                    <input type="text"
                        id="tail"
                        name="tail"
                        value={product.tail}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.formControlLogin}>
                    <label htmlFor="type">Type</label>
                    <input type="text"
                        id="type"
                        name="type"
                        value={product.type}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.formControlLogin}>
                    <label htmlFor="price">Price</label>
                    <input type="number"
                        id="price"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.formControlLogin}>
                    <button type="submit">Add Product</button>
                </div>
            </form>
        </div>
    )
}

export default Dashboard