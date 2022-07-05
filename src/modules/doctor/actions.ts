import axios from "axios";

export const createDoctor = async (payload:any, setter: (state: string)=>void): Promise<void> => {
    try{
        const req: any = await axios.post(`http://localhost:5000/api/user`, payload);
        console.log(req?.data?.message)
    } catch (error: any) {
        alert(error?.response?.data?.message);
    }
};