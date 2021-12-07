"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
axios_1.default.get("https://restcountries.com/v3.1/all")
    .then((x) => {
    x.data.forEach((s) => {
        console.log(s.name.official);
    });
})
    .catch((error) => { console.log(error); });
