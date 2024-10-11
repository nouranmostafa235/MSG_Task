import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchId'
})
export class SearchIdPipe implements PipeTransform {

  transform(userData: any[], searchTerm: string): any[] {
    if (!userData || !searchTerm) {
      return userData;
    }

    return userData.filter(data => data.id.toString().includes(searchTerm)||data.first_name.toLowerCase().includes(searchTerm));
  }

}
