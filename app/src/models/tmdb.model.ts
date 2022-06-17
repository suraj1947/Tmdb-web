export interface Person{
    id:string
    name:string,
    image:string,
    age:number,
    gender:number,
    placeOfBirth:string
    birthday: Date
    profilePath:string
}

export interface Actor{
    id:string,
    name: string,
    profilePath:string
}

export interface TvShows{
    id:string,
    name: string,
    overview:string,
    firstAirDate:string
}

