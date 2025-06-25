import type { Products } from "../interface";

export const getProducts = async (page = 1):Promise<Products[]> => {
    try {
        const response = await fetch(`http://localhost:3000/products?_page=${page}&_limit=24`);
        if (response.ok) {
            console.log(response.status, response.statusText);
            const data = await response.json();
            return data;
        } else {
            throw new Error('Faild to fech products');
        }
    } catch (error) {
        throw new Error('Network error');
    }
}