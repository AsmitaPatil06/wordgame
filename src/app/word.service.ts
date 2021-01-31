import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Word } from "./models/word.model";

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor(private _http:HttpClient) { }

  url='http://localhost:3004/words';
    private listWord:Word[] = [
      {
 
       id:1,
       question:"Bitcoin",
       answer:"ListComponentCardListComponentBitcoinListComponentBitcoinsdfgh"
      },
 
      {
 
       id:2,
       question:"Bitcoin",
       answer:"CurrencyCardListComponentCardListComponent"
      },
 
      {
 
         id:3,
         question:"Bitcoin",
         answer:"CurrencyCardListComponentCardListComponent"
       }
 
    ];

    curruntData:Word={

      id:null,
      question:'',
      answer:''
    }
    

    createWord(word:Word): Observable<Word>
    {
      return this._http.post<Word>("http://localhost:3004/words",word)
    }
   
    getAllWord(): Observable<Word[]>
    {
        return this._http.get<Word[]>("http://localhost:3004/words");
    }
    updateWord(word:Word):Observable<Word>{

        return this._http.put<Word>(this.url + '/' + word.id, word,);
    }
    // update(employee:Employee,img): Observable<Employee>{

    //   // return this.httpClient.put<Employee>(this.url + '/' + employee.id, employee,);
    //   return this.httpClient.put<Employee>(this.url + '/' + employee.id,{"firstName":employee.firstName, "lastName":employee.lastName,"email":employee.email,"DOB":employee.DOB,"phoneNumber":employee.phoneNumber,"Address":employee.Address,"position":employee.position ,"photopath":img});
    //  }
    deleteWord(id:number):Observable<void>
    {
      
        return this._http.delete<void>("http://localhost:3004/words/"+id); 
     

    }
  

}
