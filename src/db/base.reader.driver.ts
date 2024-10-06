import fs from "fs"
import path from "path"

export class BaseReaderDriver {

    constructor(
        private baseName: string
    ) {
        this.create();
    }

    get pathName() {
        return path.join(process.cwd(), '/db', '/'+this.baseName+'.json')
    }

    async get() {
        try {
            const data = await fs.readFileSync(this.pathName, 'utf-8')
            return JSON.parse(data);
        } catch(e) {
            return [];
        }
    }

    async create() {
        try {
            let data = await this.get();
            if(!data?.length) {
                await fs.writeFileSync(this.pathName, JSON.stringify([]), 'utf-8');
                data = [];
            }
            return data;
        } catch(e) {
            throw new Error(e)
        }
    }

}