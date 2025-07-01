import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchText: string = '';

  //1. Create an event
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  //1. read: Use it to read the different token from the queried elements
  //2. static: determines when the qeury is resolved
  @ViewChild('searchInput') searchInputEl: ElementRef;

  onSearchTextChanged(){
    // this.searchTextChanged.emit(this.searchText)
  }

  // updateSearchText(event: any){
  //   this.searchText = event.target.value;
  // }

  updateSearchText(){
    // this.searchText = event.target.value;
    // console.log(inputEl.value)
    this.searchText = this.searchInputEl.nativeElement.value;
        this.searchTextChanged.emit(this.searchText)

  }


  
}
