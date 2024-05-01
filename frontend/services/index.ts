// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import Axios from "axios";

type Data = {
    name: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    res.status(200).json({ name: 'John Doe' })
}

export const API: any = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_APP_API_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
    }
});

export const NEXT_API: any = Axios.create({
    baseURL: '/api',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

const APIService = {
    user: {
        getAll: (data?: any) => API.get("/getAllUser", { params: { email: data } }),
        get: (data?: any) => API.get("/user", { params: { _id: data } }),
        create: (data: any) =>
            API.post(
                "/user",
                { ...data },
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            ),
        update: (data: any) =>
            API.put(
                "/user",
                { ...data },
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            ),
        delete: (data: any) => API.delete("/user", { params: { _id: data } }),
    },

    mcFormData: {
        getAll: (data?: any) => API.get("/getAllMcFormData", {}),
        get: (data?: any) => API.get("/mcFormData", { params: { _id: data } }),
        create: (data: any) =>
            API.post(
                "/mcFormData",
                { ...data },
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            ),
        update: (data: any) =>
            API.put(
                "/mcFormData",
                { ...data },
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            ),
        delete: (data: any) => API.delete("/mcFormData", { params: { _id: data } }),
    },

    file: {
        upload: (data: any) =>
            API.post(
                "/upload",
                { file: data },
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            ),
    },
}
export { APIService };
