"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
//importando express e o json como era no react
const app = (0, express_1.default)();
//usando uma variavel para receber essa function com era no useNavigate
app.use((0, express_1.json)());
//usando o formato json importado
app.get('/', (request, response) => {
    return response.json({ message: 'Hello, TypeScript!' });
});
//usando o .get(requisição) que recebe como parametro o caminho , request e response e neste caso retornará uma response que é o json com a menssagem hello typeScript 
app.listen(4000, () => {
    console.log('🚀 Server started on http://localhost:4000');
});
//aqui o app vai escutar a porta 3000 e imprimir no console o servidor que foi iniciado na porta 3000, se eu mudar para 4000 ele iniciará na 4000 as requisições
