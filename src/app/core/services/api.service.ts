import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

	constructor(private http: HttpClient) {}

	get<T>(request: APIRequest<any>): Observable<APIResponse<T>> {
		return this.http
			.get<APIResponse<T>>(request.url)
			.pipe(catchError(error => throwError(this.getErrorObject(error))));
	}

	post<T, R>(request: APIRequest<T>): Observable<APIResponse<R>> {
		return this.http
			.post<APIResponse<R>>(request.url, request.body)
			.pipe(catchError(error => throwError(this.getErrorObject(error))));
	}

	put<T, R>(request: APIRequest<T>): Observable<APIResponse<R>> {
		return this.http
			.put<APIResponse<R>>(request.url, request.body)
			.pipe(catchError(error => throwError(this.getErrorObject(error))));
	}

	delete<T>(request: APIRequest<T>): Observable<APIResponse<T>> {
		return this.http.delete<APIResponse<T>>(request.url)
			.pipe(catchError(error => throwError(this.getErrorObject(error)))
		);
	}

	private getErrorObject(httpError: any): any {
		const errorObject =
			typeof httpError.error === 'string' ? JSON.parse(httpError.error) : httpError.error;
		return errorObject;
	}
}

export class APIRequest<T> {
	url: string;
	body?: T;
	constructor(private _url: string, private _body?: T) {
		this.url = this._url;
		this.body = this._body;
	}
}

export class APIResponse<R> {
	message: string;
	data: R;
	constructor(private _message: string, private _data: R) {
		this.message = this._message;
		this.data = this._data;
	}
}


