import { Component, OnInit } from '@angular/core';
import { LoadDataService } from '../../../services/load-data.service';
import { UserInformations } from 'src/interfaces/UserInformations';
import { debounceTime, switchMap, tap } from 'rxjs/operators';
import { FormsModule, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data : Array<UserInformations>;
  breakpoint : number;
  value : string = "";
  result = null;
  searchTestimonials : FormControl = new FormControl();
  searchTestimonials$ : Observable<string> = this.searchTestimonials.valueChanges;

  constructor(private dataService : LoadDataService) { 
    this.dataService.getJSON().subscribe(data => {
      this.data = data;
    })
  }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
    console.log("test");
    this.searchTestimonials$
      .pipe(
        debounceTime(1000),
        switchMap(word => this.dataService.getFilteredData(word)),
        tap(x => console.log(x))
      )
      .subscribe(data => this.result = data);
  }

  onResize(event) {
    console.log("test" + event.target.innerWidth);
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 3;
  }
}
