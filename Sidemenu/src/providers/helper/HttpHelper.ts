import { Injectable } from "@angular/core";
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpHelper {

    static GET(http: Http, options) {

        let url = options.url;
        let params = options.data;
        let success = options.success;
        let error = options.error;

        url = url + "?jsoncors=jsoncors&" + HttpHelper.JsonString(params);

        return http.get(url).timeout(3000).toPromise()
            .then(response => {
                if (success != null && success != undefined) {
                    success(response);
                }
            })
            .catch(() => {
                if (error != null && error != undefined) {
                    error();
                }
            });
    }


    static POST(http: Http, options) {

        let url = options.url;
        let params = options.data;
        let success = options.success;
        let error = options.error;

        params = "jsoncors=jsoncors&" + HttpHelper.JsonString(params);

        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');

        return http.post(url, params, { headers: headers }).timeout(3000).toPromise()
            .then(response => {
                if (success != null && success != undefined) {
                    success(response);
                }
            })
            .catch(() => {
                if (error != null && error != undefined) {
                    error();
                }
            });
    }

    static JsonString(json) {
        let params = [];
        for (let o in json) {
            if (json.hasOwnProperty(o)) {
                params.push(o + '=' + json[o]);
            }
        }
        return params.join('&');
    }
}
