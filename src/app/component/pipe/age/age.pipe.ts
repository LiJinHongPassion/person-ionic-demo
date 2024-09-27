import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {
  transform(birthday: string): number {
    const today = new Date();
    const birthdate = new Date(birthday);
    const age = today.getFullYear() - birthdate.getFullYear();
    const m = today.getMonth() - birthdate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
      return age - 1;
    }
    return age;
  }
}