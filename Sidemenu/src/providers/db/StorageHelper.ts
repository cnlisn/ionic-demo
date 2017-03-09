import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';

@Injectable()
export class StorageHelper {

    constructor(public storage: Storage) { }

    GET(name, type) {

        return this.storage.get(name).then(data => {
            let v = data;
            if (type == "json" && v != "") {
                v = JSON.parse(v);
            }
            return v;
        });
    }

    SET(name, val) {

        if (typeof val == "object") {
            val = JSON.stringify(val);
        }
        this.storage.set(name, val);
    }

    Remove(name) {

        this.storage.remove(name);
    }

}
