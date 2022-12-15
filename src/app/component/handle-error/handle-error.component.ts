import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-handle-error',
  templateUrl: './handle-error.component.html',
  styleUrls: ['./handle-error.component.scss']
})
export class HandleErrorComponent {
@Input() errorMsg:string | undefined;

}
