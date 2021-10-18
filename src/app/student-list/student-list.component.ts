import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import studentInfo from '../student.json';
import Swal from 'sweetalert2';

export interface Student {
  id: number;
  name: string;
  birthyear: number;
  department: string;
  gender: string;
  profile: string;
}
export interface Mobiles {
  id: number;
  mobileName: string;
  ram: number;
  rom: number;
  pricing: number;
}
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  @Input() getDatas: any;
  @Input() hero: any;
  @Output() selectedStud = new EventEmitter<any>();
  mobiles: Array<Mobiles> = [];
  constructor() {
    this.mobiles = [
      {
        id: 1,
        mobileName: 'Realme 8i',
        ram: 4,
        rom: 64,
        pricing: 12999,
      },
      {
        id: 2,
        mobileName: 'Realme 8 5G',
        ram: 6,
        rom: 128,
        pricing: 17999,
      },
      {
        id: 3,
        mobileName: 'POCO X3 Pro',
        ram: 6,
        rom: 128,
        pricing: 16999,
      },
      {
        id: 4,
        mobileName: 'OPPO A53s 5G',
        ram: 6,
        rom: 128,
        pricing: 18999,
      },
      {
        id: 5,
        mobileName: 'Realme X7 5G',
        ram: 8,
        rom: 128,
        pricing: 18999,
      },
    ];
  }

  ngOnInit(): void {}

  tinyAlert() {
    Swal.fire('Hey There !');
  }

  successNotification() {
    Swal.fire('Hi', 'we have been informed', 'success');
  }

  alertConfirmation(data: any) {
    const showThis = `Do you wanna go with ${data}`;
    // console.log(showThis);
    Swal.fire({
      title: 'Are you sure? ',
      text: showThis,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if ((result.value, data)) {
        const sentDAta = this.selectedStud.emit(data);
        // console.log('clicked');
        // Swal.fire('Removed!', 'Product removed successfully.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Swal.fire('Cancelled', 'Product still in our database.)', 'error');
      }
    });
  }
  students: Student[] = studentInfo;
  checkDpt: boolean = true;
}
