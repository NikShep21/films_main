import { ITypeRequest, ITypeTitle } from '@/shared/types/TypeParamsApi'
import { useQuery } from '@tanstack/react-query'
import { titlesService } from './Titles.service'


export function useGetMassiveTitles<T extends ITypeTitle>(typeRequest: ITypeRequest, typeTitle: T) {

	const {data, isLoading} = useQuery({
		queryKey: ['titles', typeTitle, typeRequest],
		queryFn: () => titlesService.getMassiveTitles<T>(typeRequest, typeTitle),
		
	})

	return { data,  isLoading }
}
