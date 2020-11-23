import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItuneService } from '../model/itune-service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {

  constructor( private ituneService: ItuneService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.ituneService.recherche(form.value.recherche)
    //console.log(form.value);
    
  }

}
