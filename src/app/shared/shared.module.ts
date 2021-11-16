import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRowComponent } from './content-row/content-row.component';

@NgModule({
    declarations: [
    ContentRowComponent],
    imports: [
        CommonModule
    ],
    exports:[
        ContentRowComponent
    ],
    providers: []
  })
  export class SharedModule { }
  