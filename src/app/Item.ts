export interface SizeOption{
    "id": string;
    "name": string;
    "value": string;
}

export interface Item{
    "id": Number;
    "vendor": string;
    "name": string;
    "image_src": string[];
    "price": string;
    "tag": string;
    "compare_at_price": string;
    "options": SizeOption[];
    "discount"?: number;
    "selectedSize"?: SizeOption;
}
