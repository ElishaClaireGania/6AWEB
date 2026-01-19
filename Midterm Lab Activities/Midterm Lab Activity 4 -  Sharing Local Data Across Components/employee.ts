import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Employee {
  getEmployees() {
    return [
      {
        id: 101,
        firstname: 'Elisha Claire',
        lastname: 'A. Gania',
        email: 'eagania@student.hau.edu.ph'
      },

      {
        id: 102,
        firstname: 'Joseph',
        lastname: 'Dizon',
        email: 'jdizon@hau.edu.ph'
      },

      {
        id: 103,
        firstname: 'James',
        lastname: 'Atienza',
        email: 'jatienza@hau.edu.ph'
      },

        {
        id: 104,
        firstname: 'John',
        lastname: 'Cena',
        email: 'jcena@hau.edu.ph'
      },

        {
        id: 105,
        firstname: 'Robert',
        lastname: 'Quintana',
        email: 'rquintana@hau.edu.ph'
      },
    ]
  }
}
