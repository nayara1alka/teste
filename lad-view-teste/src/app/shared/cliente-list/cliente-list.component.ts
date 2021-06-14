import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { ClienteService } from 'src/app/core/cliente.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  queryField = new FormControl()
  list$?: Observable<Cliente[]>
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {

    this.listar() 

  }
 
  listar() {
    this.list$ = this.clienteService.list().pipe(
      map((res: any) => res)
    )
  } 


}
