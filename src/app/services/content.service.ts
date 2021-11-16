import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class ContentService{
    constructor(private http: HttpClient){ }

    getGenre(){
        return this.http.get<any>(
            '/api/genre'
        )
    }

    getMovies(){
        return this.http.get<any>(
            'api/movie'
        )
    }
}