import {Component, ViewEncapsulation} from "@angular/core";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    title = 'Grocery List';

    private _signedIn: boolean = null;

    isSignedIn(): boolean {
        return this._signedIn;
    }
}