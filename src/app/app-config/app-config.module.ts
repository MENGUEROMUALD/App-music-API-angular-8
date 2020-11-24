import { CommonModule } from '@angular/common';
import { InjectionToken, NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export class AppConfig {
    apiEndPoint:string = '';
}
// cette classe permet d'appeler ou connecter l'API
export const APP_DI_CONFIG: AppConfig = {
    apiEndPoint: environment.apiEndPoint
}

@NgModule({
    declarations: [

    ],
    imports: [
        CommonModule
    ],
    providers: [{
        provide: APP_CONFIG,
        useValue: APP_DI_CONFIG
    }]
})


export class AppConfigModule{

}