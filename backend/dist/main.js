"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.listen(4000, () => console.log('Server started'));
axios_1.default.get("https://restcountries.com/v3.1/all")
    .then((x) => {
    x.data.forEach((s) => {
        console.log(s.name.official);
    });
})
    .catch((error) => { console.log(error); });
