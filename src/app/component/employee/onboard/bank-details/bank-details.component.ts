import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bank-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bank-details.component.html',
  styleUrl: './bank-details.component.css'
})
export class BankDetailsComponent {
bankname: any;
accnumber: any;
ifsc: any;

}
