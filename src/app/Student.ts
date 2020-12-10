import { Address } from './Address';

export class Student {
  studentId: number;
  firstName: string;
  lastName: string;
  emailId: string;
  schoolName: string;
  address: Address;
  active: boolean;

  constructor() {
    this.address = new Address();
  }
}
