import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
  name: 'userName'
})
export class UserPipe implements PipeTransform {
  transform(userId: string, users: any[]): string {
    if (!userId || !users) {
      return '';
    }
    const user = users.find(u => u.id === userId);
    return user?.name || user?.nickname || userId;
  }
}