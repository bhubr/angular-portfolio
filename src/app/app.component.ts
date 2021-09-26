import { Component } from '@angular/core';

import { Project } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  projects: Project[] = [
    {
      id: 1,
      name: 'Angular Portfolio',
      description: 'A minimalist porfolio App, built on Angular',
      pictureUrl: 'https://i.imgur.com/D0hq9X1.png',
      tags: ['Angular']
    },
    {
      id: 2,
      name: 'Quiz App',
      description: 'A quiz application, built on Node.js & React',
      pictureUrl: 'https://i.imgur.com/6XL3njX.png',
      tags: ['Angular', 'React', 'Node.js']
    }
  ]
}
