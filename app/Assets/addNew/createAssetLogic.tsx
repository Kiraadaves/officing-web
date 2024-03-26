import axios from "axios"

const API_BASE_URL = "https://officing-node-api.onrender.com/api/v1/assets"

export const CreateAsset = async (assetDetails : any) => {
    try {
        const res = await axios.post(`${API_BASE_URL}`, assetDetails)
        console.log(res.data)
        return res.data
    } catch (err) { 
        throw err
    }
}