import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Pessoa } from '../models/pessoa';
import { CpeService } from '../services/cpe/cpe.service';

@Component({
  selector: 'app-list-formualario1',
  templateUrl: './list-formualario1.component.html',
  styleUrls: ['./list-formualario1.component.css']
})
export class ListFormualario1Component implements OnInit {

    pessoas: Pessoa[] = [];
    totalRecords: number= 0;
    loading: boolean = false;
    selectAll: boolean = false;
    //pessoaSelecionada: Pessoa[] = [];
    pessoaSelecionada?: Pessoa | null = null;

    constructor(private cepService: CpeService) { }

    ngOnInit() {
        this.loading = true;
    }

    loadCustomers(event: LazyLoadEvent) {
        this.loading = true;

        setTimeout(() => {
            this.cepService.getPessoas(event).subscribe(res => {
                this.pessoas = res.registros;
                this.totalRecords = res.totalRecords;
                this.loading = false;
            })
        }, 1000);
    }

    onSelectionChange(value:Pessoa) {
        //this.selectAll = value.length === this.totalRecords;
        this.pessoaSelecionada = value;
    }

    onSelectAllChange(event:any) {
        const checked = event.checked;

        if (checked) {
            // this.customerService.getCustomers().then(res => {
            //     this.pessoaSelecionada = res.pessoas;
            //     this.selectAll = true;
            // });
        }
        else {
            // this.pessoaSelecionada = [];
            // this.selectAll = false;
        }
    }

}
