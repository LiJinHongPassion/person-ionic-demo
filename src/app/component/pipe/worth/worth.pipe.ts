import { Pipe, PipeTransform } from "@angular/core";
import { I18nService } from "src/app/services/i18n/i18n.service";

@Pipe({
    name: 'worth'
  })
  export class WorthPipe implements PipeTransform {
    constructor(private i18n: I18nService){

    }

    valueArr = [
        'high',
        'middle',
        'low',
    ]

    transform(value: number, args?: any): any {
        return this.i18n.get(this.valueArr[value]);
    }
  }