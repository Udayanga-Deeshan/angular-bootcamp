import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  constructor(private router:Router){}

  ngOnChanges(changes: SimpleChanges): void {
      console.log("1.Onchanges method called");
      
  }

  ngOnInit(): void {
    // use for API call
      console.log("2. ng OnInit() called");
      
  }

  ngDoCheck(): void {
      // use for every change detection
      console.log("Ng Dochecked() called");
      
  }

  ngAfterContentInit(): void {
    // sue for ng content
      console.log("ng AfterContentInit called...");
      
  }

  ngAfterContentChecked(): void {
    console.log("ng AfterContentChecked called...");
      
  }
  ngAfterViewInit(): void {
    // sue for view child
    console.log("ng AfterViewInit called...");
  }
  ngAfterViewChecked(): void {
    console.log("ng AfterViewChecked called...");
  }

  ngOnDestroy(): void {
    console.log("ng OnDestroy called...");
  }

  Login(){
      this.router.navigateByUrl("data-binding")
  }

}
