import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Actor, Person } from "./models/tmdb.model";

@Injectable({
    providedIn:'root'
})
export class TmdbService{

    private baseUrl : string = 'http://localhost:8080/people'

    person: Subject<Person>= new Subject();
    constructor(private http : HttpClient) {}

    getActorByName(name:string){
        return this.http.get<Person[]>(this.baseUrl,{params:{query:name}})
    }

    getPersonById(id:string){
        return this.http.get<Person>(this.baseUrl+`/${id}`)
    }
}