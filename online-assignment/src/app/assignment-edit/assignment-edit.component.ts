import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-edit',
  templateUrl: './assignment-edit.component.html',
  styleUrls: ['./assignment-edit.component.css']
})
export class AssignmentEditComponent implements OnInit {

  question: string = 'The lens used in a simple microscope is';
  helpText: string = 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui';

  responses: string[] = ['Concave', 'Convex', 'Cylindrical', 'None'];
  correctResponse: string = 'Convex'


  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  constructor() { }

  ngOnInit(): void {
  }

}
