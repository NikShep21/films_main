import { IBaseOptions, IOptions, ISearchParams } from "@/shared/types/fetchTypes"
import { FetchError } from "./fetchError"

export class MyFetch {
	private baseUrl: string
	private options: Omit<IBaseOptions, 'body' | 'headers'>
	private params: ISearchParams
	private headers: HeadersInit

	constructor(initFetch: {
		baseUrl: string
		baseOptions?: IBaseOptions
		baseParams?: Record<string, any>
		baseHeaders?: HeadersInit
	}) {
		this.baseUrl = initFetch.baseUrl.replace(/\/+$/, '') 
		this.options = initFetch.baseOptions ?? {}
		this.params = initFetch.baseParams ?? {}
		this.headers = initFetch.baseHeaders ?? {}
	}

	private prepareJsonOptions(options: IOptions): IOptions {
		return {
			...options,
			headers: {
				'Content-Type': 'application/json',
				...(options.headers || {}),
			},
			...(!!options.body && { body: JSON.stringify(options.body) }),
		}
	}

	private createParams(params: Record<string, any> = {}): string {
		const combinedParams = { ...this.params, ...params }
		const searchParams = new URLSearchParams()

		for (const key in combinedParams) {
			const value = combinedParams[key]
			if (value == null) continue

			if (Array.isArray(value)) {
				value.forEach((v) => {
					if (v != null) {
						searchParams.append(key, String(v))
					}
				})
			} else {
				searchParams.append(key, String(value))
			}
		}

		const queryString = searchParams.toString()
		return queryString ? `?${queryString}` : ''
	}

	private async request<T>(
		endpoint: string,
		method: RequestInit['method'],
		options: IOptions
	): Promise<T> {
		const url = `${this.baseUrl}/${endpoint.replace(/^\/+/, '')}${this.createParams(options.params)}`
		const config: RequestInit = {
			...this.options,
			...options,
			headers: {
				...this.headers,
				...(options.headers || {}),
			},
			method,
		}

		const response = await fetch(url, config)

		if (!response.ok) {
			let errorMessage = response.statusText
			try {
				const errorJson = await response.clone().json()
				errorMessage = errorJson?.message || errorMessage
			} catch (_) {
				// ignore
			}
			throw new FetchError(errorMessage, response.status)
		}

		const contentType = response.headers.get('Content-Type') || ''
		if (contentType.includes('application/json')) {
			return (await response.json()) as T
		}

		return (await response.text()) as unknown as T
	}

	public get<T>(endpoint: string, options: Omit<IOptions, 'body'> = {}) {
		return this.request<T>(endpoint, 'GET', options)
	}

	public post<T>(endpoint: string, options: IOptions = {}) {
		return this.request<T>(endpoint, 'POST', this.prepareJsonOptions(options))
	}

	public put<T>(endpoint: string, options: IOptions = {}) {
		return this.request<T>(endpoint, 'PUT', this.prepareJsonOptions(options))
	}

	public patch<T>(endpoint: string, options: IOptions = {}) {
		return this.request<T>(endpoint, 'PATCH', this.prepareJsonOptions(options))
	}

	public delete<T>(endpoint: string, options: Omit<IOptions, 'body'> = {}) {
		return this.request<T>(endpoint, 'DELETE', options)
	}
}
