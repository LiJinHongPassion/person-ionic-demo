import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(translate: TranslateService) {
    // 设置默认的语言
    translate.setDefaultLang("zh-cn");
    translate.use("zh-cn");
  }
}
