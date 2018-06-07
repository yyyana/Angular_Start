export class Book {
    constructor(private _name: string, private _author: string, private _annotation: string, private _url_img: string) {}

    get name(): string {
        return this._name;
    }
    get author(): string {
        return this._author;
    }
    get annotation(): string {
        return this._annotation;
    }
    get url_img(): string {
        return this._url_img;
    }
    set name(value: string) {
        this._name = value;
    }
    set author(value: string) {
        this._author = value;
    }
    set annotation(value: string) {
        this._annotation = value;
    }
    set url_img(value: string) {
        this._url_img = value;
    }
    public clone() {
       return new Book(this.name, this.author, this.annotation, this.url_img);
    }
}
