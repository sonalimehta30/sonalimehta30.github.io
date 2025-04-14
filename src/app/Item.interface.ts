export interface SizeOption{
    "sizeCode": string;
    "name": string;
    "value": string;
}

export interface Item{
    "id": number;
    "vendor": string;
    "name": string;
    "image_src": string[];
    "price": string;
    "tag": string;
    "compare_at_price": string;
    "options": SizeOption[];
    "discount"?: number;
    "selectedSize"?: string;
    "qty"?: number;
    "sizeCode"?: string;
}
