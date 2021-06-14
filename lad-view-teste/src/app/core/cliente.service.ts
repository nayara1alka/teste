import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { Cliente } from '../shared/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly API = `${environment.BASE_API}cliente/`

  constructor(private http: HttpClient) { }

  create(item: any) {
    return this.http.post(this.API, item).pipe(take(1));
  }

  list() {
    return this.http.get<Cliente[]>(this.API)
  }


}
