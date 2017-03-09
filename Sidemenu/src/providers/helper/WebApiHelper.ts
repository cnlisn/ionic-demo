import { Injectable } from "@angular/core";

@Injectable()
export class WebApiHelper {

    static GetUrl(name, api) {

        let key = { key: api };
        return name.host + name.Service[key.key];

    }

}
