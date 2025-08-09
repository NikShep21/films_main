export interface RequestOptions extends RequestInit {
	
	params?: Record<string, any>
}

export class FetchError extends Error {
    public status: number;
    
    constructor(message: string, status: number) {
        super(message);
        this.status = status;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}