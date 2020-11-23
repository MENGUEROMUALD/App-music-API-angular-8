import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AppConfig, APP_CONFIG } from '../app-config/app-config.module';
import { Music } from './music.model';

@Injectable()
export class ItuneService{

    public requete: string = '';

    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig){

    }

    public recherche(titre: string){
        this.requete = titre;
        this.http.get(this.config.apiEndPoint+'search?term='+this.requete).pipe(
            map(
                data => {
                    const res: any = data;
                    console.log(res.results);
                    return res.results ? res.results : [];
                }
            )
        ).subscribe((music) => '');
    }

    // retourne l'objet de music
    public bookFactory(item: any): Music {
        return new Music(
            item.artistname,
            item.artworkUrl100,
            item.artworkUrl30,
            item.artworkUrl60,
            item.trackId,
            item.previewUrl
        );
    }
}