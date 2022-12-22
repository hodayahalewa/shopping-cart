import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-handle-error',
  templateUrl: './handle-error.component.html',
  styleUrls: ['./handle-error.component.scss']
})
export class HandleErrorComponent {
  //If there is no internet reception or the loading of the products has failed
@Input() errorMsg:string | undefined;

}
