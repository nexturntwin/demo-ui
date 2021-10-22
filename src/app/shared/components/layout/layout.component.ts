import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  userName: string;
  
  constructor(private route: Router) { }

  ngOnInit(): void {
    this.userName = "Murugan";
    this.route.navigate(['/capture']);
  }

}
