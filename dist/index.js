"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const url = 'https://jsonplaceholder.typicode.com/posts/1';
axios_1.default.get(url).then((response) => {
    const post = response.data;
    const userId = post.userId;
    const title = post.title;
    const body = post.body;
    console.log(userId, title, body);
});
// classes 
class Phone {
}
let phone = new Phone();
// object  
let product = {
    name: 'pen',
    price: 15
};
