import axios from 'axios';

export async function getAllproduct() {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/product/get`, {
            timeout: 15000,
        },);
        return response.data
    } catch (err) {
        console.log(err);
    }
}
