import {Component} from 'angular2/core';
import {myhero} from './myhero-components';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello World!hgfhjdsghfsd</p>     
         <my-hero></my-hero>         
    `,
    directives:[myhero]   
})
export class AppComponent {

}