import { BuiltinFunctionCall } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnChanges, OnInit } from '@angular/core';

import{ Word } from '../models/word.model';

import { WordService } from "../word.service";
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  panelOpenState = false;
   words: Word[];
  i: any;
  constructor(private _WordService : WordService) { }

  wordObj={
    id:'',
    question:'',
    answer:'',

  }

  toggle = true;
   status = ''; 

right(word) {
    const r=word.id;  
    this.toggle = !this.toggle;
  
    //status=this.toggle;
    // this.status = this.toggle ? 'Enable' : 'Disable';
    //this.status=

}


  ngOnInit(): void {

   //this.words= this._WordService.getWord();
   this.getAll();
  }
 


  getAll() {
    this._WordService.getAllWord().subscribe((response) =>{
      this.words=response;
    })
  }
  
  delete(word){
    this._WordService.deleteWord(word.id).subscribe(()=>{
      this.getAll();
    })
  }


  edit(word){
    //console.log(word);
    this._WordService.curruntData=Object.assign({},word);
  }
  update(curruntData){

    console.log(curruntData);
     this._WordService.updateWord(curruntData).subscribe((res)=>{
     this.i=res;
       console.log(this.i);
     });
  
  }



}
