import {InMemoryDbService} from "angular-in-memory-web-api";

import { Category } from "./pages/categories/shared/category.model";

export class InMemoryDatabase implements InMemoryDbService {
    createDb(){
        const categories: Category[] = [
            {id: 1, name: "Moradia", description: "Pagamentos de Contas da casa"},
            {id: 1, name: "Saúde", description: "Plano de saúdo e remedios"},
            {id: 1, name: "Lazer", description: "Cinema, parques, prapa, etc"},
            {id: 1, name: "Salário", description: "Recebimento de Salário"},
            {id: 1, name: "Freelas", description: "Trabalhos como freelancer"}
        ];

        return {
            categories
        }
    }
}