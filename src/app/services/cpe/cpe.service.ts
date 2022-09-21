import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Paginador } from 'src/app/models/paginador';
import { Pessoa } from 'src/app/models/pessoa';

@Injectable({
  providedIn: 'root'
})
export class CpeService {

  constructor() { }

  private PESSOAS : Pessoa[] = [
     {codigo:1,  dataNascimento: new Date(2000, 1, 31, 15, 0, 0, 0), email:'teste@gmail.com', nacionalidade:'Brasileira', naturalidade:'São Paulo',nome:'Teste teste e teste',nomeMae:'Maria Teste', site:'wwww.uol.com'},
     {codigo:2, dataNascimento: new Date(2000, 1, 30, 15, 0, 0, 0), email:'teste@gmail.com', nacionalidade:'Brasileira', naturalidade:'São Paulo',nome:'Teste teste e teste',nomeMae:'Maria Teste', site:'wwww.uol.com'},
     {codigo:3, dataNascimento: new Date(2000, 1, 30, 15, 0, 0, 0), email:'teste@gmail.com', nacionalidade:'Brasileira', naturalidade:'São Paulo',nome:'Teste teste e teste',nomeMae:'Maria Teste', site:'wwww.uol.com'},
     {codigo:4, dataNascimento: new Date(2000, 1, 30, 15, 0, 0, 0), email:'teste@gmail.com', nacionalidade:'Brasileira', naturalidade:'São Paulo',nome:'Teste teste e teste',nomeMae:'Maria Teste', site:'wwww.uol.com'},
     {codigo:5, dataNascimento: new Date(2000, 1, 30, 15, 0, 0, 0), email:'teste@gmail.com', nacionalidade:'Brasileira', naturalidade:'São Paulo',nome:'Teste teste e teste',nomeMae:'Maria Teste', site:'wwww.uol.com'},
     {codigo:6, dataNascimento: new Date(2000, 1, 30, 15, 0, 0, 0), email:'teste@gmail.com', nacionalidade:'Brasileira', naturalidade:'São Paulo',nome:'Teste teste e teste',nomeMae:'Maria Teste', site:'wwww.uol.com'},
     {codigo:7, dataNascimento: new Date(2000, 1, 30, 15, 0, 0, 0), email:'teste@gmail.com', nacionalidade:'Brasileira', naturalidade:'São Paulo',nome:'Teste teste e teste',nomeMae:'Maria Teste', site:'wwww.uol.com'},
     {codigo:8, dataNascimento: new Date(2000, 1, 30, 15, 0, 0, 0), email:'teste@gmail.com', nacionalidade:'Brasileira', naturalidade:'São Paulo',nome:'Teste teste e teste',nomeMae:'Maria Teste', site:'wwww.uol.com'},
     {codigo:9, dataNascimento: new Date(2000, 1, 30, 15, 0, 0, 0), email:'teste@gmail.com', nacionalidade:'Brasileira', naturalidade:'São Paulo',nome:'Teste teste e teste',nomeMae:'Maria Teste', site:'wwww.uol.com'},
     {codigo:10, dataNascimento: new Date(2000, 1, 30, 15, 0, 0, 0), email:'teste@gmail.com', nacionalidade:'Brasileira', naturalidade:'São Paulo',nome:'Teste teste e teste',nomeMae:'Maria Teste', site:'wwww.uol.com'},
     {codigo:11, dataNascimento: new Date(2000, 1, 30, 15, 0, 0, 0), email:'teste@gmail.com', nacionalidade:'Brasileira', naturalidade:'São Paulo',nome:'Teste teste e teste',nomeMae:'Maria Teste', site:'wwww.uol.com'},
     {codigo:12, dataNascimento: new Date(2000, 1, 30, 15, 0, 0, 0), email:'teste@gmail.com', nacionalidade:'Brasileira', naturalidade:'São Paulo',nome:'Teste teste e teste',nomeMae:'Maria Teste', site:'wwww.uol.com'},
     {codigo:13, dataNascimento: new Date(2000, 1, 30, 15, 0, 0, 0), email:'teste@gmail.com', nacionalidade:'Brasileira', naturalidade:'São Paulo',nome:'Teste teste e teste',nomeMae:'Maria Teste', site:'wwww.uol.com'},
     {codigo:14, dataNascimento: new Date(2000, 1, 30, 15, 0, 0, 0), email:'teste@gmail.com', nacionalidade:'Brasileira', naturalidade:'São Paulo',nome:'Teste teste e teste',nomeMae:'Maria Teste', site:'wwww.uol.com'},
     {codigo:15, dataNascimento: new Date(2000, 1, 30, 15, 0, 0, 0), email:'teste@gmail.com', nacionalidade:'Brasileira', naturalidade:'São Paulo',nome:'Teste teste e teste',nomeMae:'Maria Teste', site:'wwww.uol.com'},
     {codigo:16, dataNascimento: new Date(2000, 1, 30, 15, 0, 0, 0), email:'teste@gmail.com', nacionalidade:'Brasileira', naturalidade:'São Paulo',nome:'Teste teste e teste',nomeMae:'Maria Teste', site:'wwww.uol.com'},
     {codigo:17, dataNascimento: new Date(2000, 1, 30, 15, 0, 0, 0), email:'teste@gmail.com', nacionalidade:'Brasileira', naturalidade:'São Paulo',nome:'Teste teste e teste',nomeMae:'Maria Teste', site:'wwww.uol.com'},
     {codigo:18, dataNascimento: new Date(2000, 1, 30, 15, 0, 0, 0), email:'teste@gmail.com', nacionalidade:'Brasileira', naturalidade:'São Paulo',nome:'Teste teste e teste',nomeMae:'Maria Teste', site:'wwww.uol.com'},
     {codigo:19, dataNascimento: new Date(2000, 1, 30, 15, 0, 0, 0), email:'teste@gmail.com', nacionalidade:'Brasileira', naturalidade:'São Paulo',nome:'Teste teste e teste',nomeMae:'Maria Teste', site:'wwww.uol.com'},
     {codigo:20, dataNascimento: new Date(2000, 1, 30, 15, 0, 0, 0), email:'teste@gmail.com', nacionalidade:'Brasileira', naturalidade:'São Paulo',nome:'Teste teste e teste',nomeMae:'Maria Teste', site:'wwww.uol.com'},
     {codigo:21, dataNascimento: new Date(2000, 1, 30, 15, 0, 0, 0), email:'teste@gmail.com', nacionalidade:'Brasileira', naturalidade:'São Paulo',nome:'Teste teste e teste',nomeMae:'Maria Teste', site:'wwww.uol.com'},
     {codigo:22, dataNascimento: new Date(2000, 1, 30, 15, 0, 0, 0), email:'teste@gmail.com', nacionalidade:'Brasileira', naturalidade:'São Paulo',nome:'Teste teste e teste',nomeMae:'Maria Teste', site:'wwww.uol.com'},
     {codigo:23, dataNascimento: new Date(2000, 1, 30, 15, 0, 0, 0), email:'teste@gmail.com', nacionalidade:'Brasileira', naturalidade:'São Paulo',nome:'Teste teste e teste',nomeMae:'Maria Teste', site:'wwww.uol.com'},
     {codigo:24, dataNascimento: new Date(2000, 1, 30, 15, 0, 0, 0), email:'teste@gmail.com', nacionalidade:'Brasileira', naturalidade:'São Paulo',nome:'Teste teste e teste',nomeMae:'Maria Teste', site:'wwww.uol.com'},
     {codigo:25, dataNascimento: new Date(2000, 1, 30, 15, 0, 0, 0), email:'teste@gmail.com', nacionalidade:'Brasileira', naturalidade:'São Paulo',nome:'Teste teste e teste',nomeMae:'Maria Teste', site:'wwww.uol.com'},
     {codigo:26, dataNascimento: new Date(2000, 1, 30, 15, 0, 0, 0), email:'teste@gmail.com', nacionalidade:'Brasileira', naturalidade:'São Paulo',nome:'Teste teste e teste',nomeMae:'Maria Teste', site:'wwww.uol.com'},
     {codigo:27, dataNascimento: new Date(2000, 1, 30, 15, 0, 0, 0), email:'teste@gmail.com', nacionalidade:'Brasileira', naturalidade:'São Paulo',nome:'Teste teste e teste',nomeMae:'Maria Teste', site:'wwww.uol.com'},
     {codigo:28, dataNascimento: new Date(2000, 1, 30, 15, 0, 0, 0), email:'teste@gmail.com', nacionalidade:'Brasileira', naturalidade:'São Paulo',nome:'Teste teste e teste',nomeMae:'Maria Teste', site:'wwww.uol.com'},
     {codigo:29, dataNascimento: new Date(2000, 1, 30, 15, 0, 0, 0), email:'teste@gmail.com', nacionalidade:'Brasileira', naturalidade:'São Paulo',nome:'Teste teste e teste',nomeMae:'Maria Teste', site:'wwww.uol.com'},
     {codigo:30, dataNascimento: new Date(2000, 1, 30, 15, 0, 0, 0), email:'teste@gmail.com', nacionalidade:'Brasileira', naturalidade:'São Paulo',nome:'Teste teste e teste',nomeMae:'Maria Teste', site:'wwww.uol.com'},
     {codigo:31, dataNascimento: new Date(2000, 1, 30, 15, 0, 0, 0), email:'teste@gmail.com', nacionalidade:'Brasileira', naturalidade:'São Paulo',nome:'Teste teste e teste',nomeMae:'Maria Teste', site:'wwww.uol.com'},
     {codigo:32, dataNascimento: new Date(2000, 1, 30, 15, 0, 0, 0), email:'teste@gmail.com', nacionalidade:'Brasileira', naturalidade:'São Paulo',nome:'Teste teste e teste',nomeMae:'Maria Teste', site:'wwww.uol.com'}
  ];

  public getPessoas(param:any):Observable<Paginador<Pessoa>>{
    var filtrados:Pessoa[] = this.PESSOAS.slice(param.first, (param.first + param.rows - 1));


    var result:Paginador<Pessoa> = {registros: filtrados, totalRecords:32}
    return of(result);
  }

}
