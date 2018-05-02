import { Injectable } from "@angular/core";
import { Http, Request, RequestMethod } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Product } from "./product.model";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import "rxjs/add/operator/map";

const PROTOCOL = "http";
const PORT = 3500;

@Injectable()
export class RestDataSource {
    baseUrl: string;
    auth_token: string;

    constructor(private http: Http) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }
    authenticate(user: string, pass: string): Observable<boolean> {
        return this.http.request(new Request({
            method: RequestMethod.Post,
            url: this.baseUrl + "login",
            body: { name: user, password: pass }
        })).map(response => {
            let r = response.json();
            this.auth_token = r.success ? r.token : null;
            return r.success;
        });
    }

    getProducts(): Observable<Product[]> {
        return this.sendRequestProducts(RequestMethod.Get, "products");
    }

    saveProduct(product: Product): Observable<Product> {
        return this.sendRequestProduct(RequestMethod.Post, "products",
            product, true);
    }

    updateProduct(product): Observable<Product> {
        return this.sendRequestProduct(RequestMethod.Put,
            `products/${product.id}`, product, true);
    }

    deleteProduct(id: number): Observable<Product> {
        return this.sendRequestProduct(RequestMethod.Delete,
            `products/${id}`, null, true);
    }

   /* getProducts(): Observable<any> {
        return this.sendRequest(RequestMethod.Get, "products");
    }*/

    // saveOrder(order: Order): Observable<Order> {
    //     return this.sendRequest(RequestMethod.Post, "orders", order);
    // }
    saveOrder(order: Order): Observable<Order> {
        return this.sendRequestOrder(RequestMethod.Post, "orders", order);
    }

    getOrders(): Observable<Order[]> {
        return this.sendRequestOrders(RequestMethod.Get,
            "orders", null, true);
    }

    deleteOrder(id: number): Observable<Order> {
        return this.sendRequestOrder(RequestMethod.Delete,
            `orders/${id}`, null, true);
    }

    updateOrder(order: Order): Observable<Order> {
        return this.sendRequestOrder(RequestMethod.Put,
            `orders/${order.id}`, order, true);
    }

    private sendRequest(verb: RequestMethod,
        url: string, body?: Product | Order, auth: boolean = false): Observable<Product | Order |
         Product[] | Order | Order[]> {

            let request = new Request({
                method: verb,
                url: this.baseUrl + url,
                body: body
            });
            if (auth && this.auth_token != null) {
                request.headers.set("Authorization", `Bearer<${this.auth_token}>`);
            }
            return this.http.request(request).map(response => response.json());
    }

    private sendRequestProduct(verb: RequestMethod,
        url: string, body?: Product, auth: boolean = false ): Observable<Product> {
        let request = new Request({
            method: verb,
            url: this.baseUrl + url,
            body: body
        });
        if (auth && this.auth_token != null) {
            request.headers.set("Authorization", `Bearer<${this.auth_token}>`);
        }
        return this.http.request(request).map(response => response.json());
    }

    private sendRequestProducts(verb: RequestMethod,
        url: string, body?: Product, auth: boolean = false ): Observable<Product[] > {
        /*return this.http.request(new Request({
            method: verb,
            url: this.baseUrl + url,
            body: body
        })).map(response => response.json());*/
        let request = new Request({
            method: verb,
            url: this.baseUrl + url,
            body: body
        });
        if (auth && this.auth_token != null) {
            request.headers.set("Authorization", `Bearer<${this.auth_token}>`);
        }
        return this.http.request(request).map(response => response.json());
    }


    private sendRequestOrder(verb: RequestMethod,
        url: string, body?: Order, auth: boolean = false  ): Observable<Order> {
        let request = new Request({
            method: verb,
            url: this.baseUrl + url,
            body: body
        });
        if (auth && this.auth_token != null) {
            request.headers.set("Authorization", `Bearer<${this.auth_token}>`);
        }
        return this.http.request(request).map(response => response.json());
    }
    
    private sendRequestOrders(verb: RequestMethod,
        url: string, body?: Order, auth: boolean = false  ): Observable<Order[]> {
        /*return this.http.request(new Request({
            method: verb,
            url: this.baseUrl + url,
            body: body
        })).map(response => response.json());*/
        let request = new Request({
            method: verb,
            url: this.baseUrl + url,
            body: body
        });
        if (auth && this.auth_token != null) {
            request.headers.set("Authorization", `Bearer<${this.auth_token}>`);
        }
        return this.http.request(request).map(response => response.json());
    }
    
}
