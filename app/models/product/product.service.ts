import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Product } from "./product";

import { Observable } from "rxjs/Observable";

@Injectable()
export class ProductService {
    // адрес сервиса
    private url = "http://localhost:10336/api/Products";

    constructor(private http: Http) { }

    // Отправка GET запроса нв сервер
    public getProducts(): Observable<Product[]> {
        let products:Observable<Product[]> = this.http.get(this.url)
            .map(this.extractProducts) // преобразовывает ответ в массив экземпляров Product.
            .catch(this.handleError);
            
        return products;
    }

    public getProduct(id: string): Observable<Product> {
        let product:Observable<Product> = this.http.get(this.url + "/" + id)
            .map(this.extractProduct) // преобразовывает ответ в экземпляр Product.
            .catch(this.handleError);
        return product;
    }

    // Отправка POST запроса на сервер, добавление нового продукта в базу.
    public addProduct(product: Product) {
        return this.http.post(this.url,product)
            .catch(this.handleError);
    }

    // Отправка PUT запроса и обновление продукта в базе.
    public updateProduct(product: Product) {
        return this.http.put(this.url + "/" + product.id, product)
            .catch(this.handleError);
    }

    // Отправка DELETE запроса и удаление продукта из базы.
    public deleteProduct(product: Product) {
        return this.http.delete(this.url + "/" + product.id)
            .catch(this.handleError);
    }

    private extractProducts(response: Response) {
        
        let res = response.json();
        console.log(res);
        let products: Product[] = [];
        
        res.forEach(function (value) {
            
            products.push(new Product(value.Id,value.Name,value.Price));
            console.log(value);
          }); 
        return products;
    }


    private extractProduct(response: Response) {
        let res = response.json();
       
        let product = new Product(res.Id, res.Name, res.Price);
        return product;
    }

    private handleError(error: any, cought: Observable<any>): any {
        let message = "";

        if (error instanceof Response) {
            let errorData = error.json().error || JSON.stringify(error.json());
            message = `${error.status} - ${error.statusText || ''} ${errorData}`
        } else {
            message = error.message ? error.message : error.toString();
        }
        debugger
        console.error(message);

        return Observable.throw(message);
    }
}

