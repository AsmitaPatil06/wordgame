import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Word } from '../models/word.model';
import { WordService } from '../word.service';

@Component({
  selector: 'app-input-card',
  templateUrl: './input-card.component.html',
  styleUrls: ['./input-card.component.css']
})
export class InputCardComponent implements OnInit {

  word:Word ={

    id:null,
    question:null,
    answer:null


  };
  wordss: Word[];

  constructor(private _WordService : WordService) { }

  ngOnInit(): void {

     }

  

  saveWord() {

    if(this.word.id===null)
    {

      this._WordService.createWord(this.word).subscribe(
        (data:Word)=>{
          console.log(data);
        })
       
          
  
    }
  }






}
