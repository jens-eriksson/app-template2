export class Page {
    path: string;
    name: string;
    closeable: boolean;

    constructor(initilizer?) {
        if (initilizer) {
            Object.assign(this, initilizer);
        }
    }
}
