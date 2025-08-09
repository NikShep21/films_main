export type ISearchParams = {
	[key: string]:
		| string
		| number
		| boolean
		| undefined
		| Array<string | number | boolean | undefined>
}


export type IBaseOptions = Omit<RequestInit, 'method' >;
export interface IOptions extends IBaseOptions{
    params?:ISearchParams
	
} 

