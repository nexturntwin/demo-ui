import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/core/services/contact/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentUser: String;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.currentUser = "Murugan Nagarajan"
    this.contactService.getAllContacts().subscribe((data)=>{
      console.log(data);
    });
    this.contactService.getAllContactsViaApiService().subscribe((data) => {
      console.log(data);
    });
  }

}
