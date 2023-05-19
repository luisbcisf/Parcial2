import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bandas';
  bandss: any;
  constructor(private http: HttpClient) {}
  ngOnInit(): void{
    const url: string = 'https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/cde4429166d6e1aac42fedbb7f657291b7621583/music-bands.json'
    this.http.get(url).subscribe((response) => {
      this.bands = response;
    });
  }
}
