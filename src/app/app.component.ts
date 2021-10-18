import { Component } from '@angular/core';
import studentInfo from './student.json';
import Swal from 'sweetalert2';
export interface Student {
  id: number;
  name: string;
  birthyear: number;
  department: string;
  gender: string;
  profile: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tinyAlert() {
    Swal.fire('Hey There !');
  }

  successNotification() {
    Swal.fire('Hi', 'we have been informed', 'success');
  }

  alertConfirmation() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Removed!', 'Product removed successfully.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Product still in our database.)', 'error');
      }
    });
  }

  title = 'dev-plan';
  student: Student[] = studentInfo;
  data: any = 'New data';
  parData: any = [
    {
      name: 'strev',
    },
    {
      name: 'jhon',
    },
    {
      name: 'smith',
    },
    {
      name: 'maxwel',
    },
  ];
  patentFunction(data: any) {
    console.log(data);
  }
  showIsName(data: any) {
    console.log(`you clicked ${data}`);
  }
}
