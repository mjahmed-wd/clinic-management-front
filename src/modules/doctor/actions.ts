import axios from "axios";

export const createDoctor = async (payload: any, setter: (state: string) => void): Promise<void> => {
    try {
        const res: any = await axios.post(`http://localhost:5000/api/user`, payload);
        alert(res?.data?.message)
    } catch (error: any) {
        alert(error?.response?.data?.message);
    }
};

export const getOneDoctor = async (payload: any, setter: (state: Array<any>) => void): Promise<void> => {
    try {
        const res: any = await axios.get(`http://localhost:5000/api/user/getUser?id=${payload?._id}`);
        console.log(res?.data)
        const modifiedData = {
                ...res?.data,
                speciality: res?.data?.info?.doctorSpecialites,
                doctorOpeningHour: res?.data?.info?.doctorOpeningHour,
                doctorOpeningDayOfWeek: res?.data?.info?.doctorOpeningDayOfWeek,
                doctorDailySlotCount: res?.data?.info?.doctorDailySlotCount,
                education: res?.data?.info?.doctorEducation,
                experience: res?.data?.info?.doctorExperience,
                address: res?.data?.info?.doctorAddress,
                
            }
        setter(modifiedData);
    } catch (error: any) {
        alert(error?.response?.data?.message);
    }
};

export const getAllDoctorsList = async (payload: any, setter: (state: Array<any>) => void): Promise<void> => {
    try {
        const res: any = await axios.get(`http://localhost:5000/api/findAllUser`, payload);
        setter(res?.data)
    } catch (error: any) {
        alert(error?.response?.data?.message);
    }
};

export const deleteDoctor = async (payload: any, cb?: () => void): Promise<void> => {
    try {
        const res: any = await axios.delete(`http://localhost:5000/api/user`, { data: payload });
        alert(res?.data?.message)
        cb?.();
    } catch (error: any) {
        alert(error?.response?.data?.message);
    }
};