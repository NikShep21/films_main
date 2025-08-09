import { MyFetch } from "@/shared/configs/fetch/fetch";
import { API_BASE_URL } from "@/shared/variables/variables";
export const fetchClient = new MyFetch({
    baseUrl: API_BASE_URL,
    baseParams:{
        api_key:process.env.NEXT_PUBLIC_API_KEY
    }
})