import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Band } from '../models/band.model';

@Component({
  selector: 'app-list-bands',
  templateUrl: './list-bands.component.html',
  styleUrls: ['./list-bands.component.css']
})
export class ListBandsComponent {
  @Input() bands: Band | undefined;
  constructor(private http: HttpClient) {}
  
}
