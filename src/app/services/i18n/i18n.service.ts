import { Injectable } from '@angular/core';
import {  TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
    
  constructor(private i18n: TranslateService) { }

  public async get(id: string){
    const value = await this.i18n.get(id).toPromise()
    console.log('dsadasdasda', value)
    return value;
 
  }

}
