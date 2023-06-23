export interface ICountry {
    id?: string;
    name: string;
    capital?: string;
    languages: string[];
    population: number;
    flag?: string;
    currencies?: Currency[];
}
  
export interface Currency {
    code: string;
    name: string;
    symbol: string;
}