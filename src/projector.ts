import { Config } from "./config";
import * as fs from "fs";
import * as path from "path";

export type Data = {
    projector: {
        // pwd
        [key: string]: {
            // key       -> value
            [key: string]: string,
        }
    }
}

const defaultData = {
    projector: {}
}

export default class Projector {

    constructor(private config: Config, private data: Data) {}

    getAllValue(): {[key: string]: string} {
        let curr = this.config.pwd;
        let prev = "";

        const paths = [];
        do {
            prev = curr;
            paths.push(curr);
            curr = path.dirname(curr);
        } while (curr != prev)

        return paths.reverse().reduce((acc, path) => {
            const value = this.data.projector[path];
            if (value) {
                Object.assign(acc, value)
            }
            
            return acc;
        }, {});
    }
    
    getValue(key: string): string|undefined {
        let curr = this.config.pwd;
        let prev = "";
        
        let out = "";
        do {
            const value = this.data.projector[curr]?.[key]
            if (value) {
                out = value;
                break;
            }
            
            prev = curr;
            curr = path.dirname(curr);
        } while (curr != prev)
        
        return out;
    }
    
    setValue(key: string, value: string) {
        let dir = this.data.projector[this.config.pwd];
        if(!dir) {
            dir = this.data.projector[this.config.pwd] = {};
        }
        dir[key] = value;
    }
    
    removeValue(key: string) {
        let dir = this.data.projector[this.config.pwd];
        if(dir) {
            delete dir[key]
        }
    }
    
    save() {
        const configPath = path.dirname(this.config.config);
        if (!fs.existsSync(configPath)) {
            fs.mkdirSync(configPath, { recursive: true });
        }
        console.log(this.data)
        fs.writeFileSync(this.config.config, JSON.stringify(this.data));
    }

    static fromConfig(config: Config): Projector {
        let data: Data = defaultData;
        if(fs.existsSync(config.config)) {
            try {
                data = JSON.parse(fs.readFileSync(config.config).toString());
            } catch (e) {}
        }

        return new Projector(config, data);
    }
}
