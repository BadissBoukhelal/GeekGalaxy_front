import {Injectable} from "@angular/core";

export interface Menu{
    state:string;
    name:string;
    type:string;
    icon:string;
    role:string;

}

const MENUITEMS = [
    {state:'dashboard',name:"Tableau de bord",type:'link',icon:'dashboard',role:''},
    {state:'category',name:"Gérer les categories",type:'link',icon:'category',role:'admin'},
    {state:'product',name:"Gérer les produits",type:'link',icon:'inventory_2',role:'admin'},
    {state:'order',name:"Gérer les commandes",type:'link',icon:'shopping_cart',role:''},
    {state:'bill',name:"Voir commandes",type:'link',icon:'backup_table',role:''},
    {state:'user',name:"Gérer les utilisateur",type:'link',icon:'people',role:'admin'}
]

@Injectable()
export class MenuItems{
    getMenuItem():Menu[]{
        return MENUITEMS;
    }
}