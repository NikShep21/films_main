import { fetchClient } from "@/api/baseApi";
import { ITypeRequest, ITypeTitle } from "@/shared/types/TypeParamsApi";
import {  IMassiveResponseMap } from "@/shared/types/typesResponse";

class TitlesService {
  async getMassiveTitles<T extends ITypeTitle>(
    typeRequest: ITypeRequest,
    typeTitle: T
  ): Promise<IMassiveResponseMap[T]> {
    const response = await fetchClient.get<IMassiveResponseMap[T]>(
      `${typeTitle}/${typeRequest}`
    );
    return response;
  }
}

export const titlesService = new TitlesService();