import { fetchClient } from "@/api/baseApi";
import { ITypeRequest, ITypeTitle } from "@/shared/types/TypeParamsApi";
import {  IMassiveResponse, IMassiveResponseMap } from "@/shared/types/typesResponse";

class TitlesService {
  async getMassiveTitles<T extends ITypeTitle>(
    typeRequest: ITypeRequest,
    typeTitle: T
  ): Promise<IMassiveResponseMap[T]> {
    const response = await fetchClient.get<IMassiveResponse<T>>(
      `${typeTitle}/${typeRequest}`
    );
    console.log("response", response);
    
    return response.results;
  }
}

export const titlesService = new TitlesService();