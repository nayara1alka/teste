import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/core/alert.service';
import { ClienteService } from 'src/app/core/cliente.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  form?: FormGroup;
  submitted: boolean = false;
  private formMudou: boolean = false;

  constructor(private formBuilder: FormBuilder, private clienteService: ClienteService,
    private alertService: AlertService) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      cpf: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      nome: [null, [Validators.required, Validators.maxLength(250)]],
      senha: [null, [Validators.required]],
      logradouro: [null],
      numero: [null],
      cep: [null, [Validators.required]],
      telefone: [null, [Validators.required]],

    })
  }

  doSend() {
    this.submitted = true;
    if (this.form?.valid) {
      this.clienteService.create(this.form.value).subscribe(
        sucess => {
          this.refresh()
        },
        error => {
          this.showAlertDanger()
        }
      )
    }
  }

  refresh() {
    window.location.reload();
  }


  verificarCampo(campo: string) {
    return (!this.form?.get(campo)?.valid && (this.form?.get(campo)?.touched || this.form?.get(campo)?.dirty))
  }

  onInput() {
    this.formMudou = true;
  }

  hasError(item: string) {
    return this.form?.get(item)?.errors;
  }

  showAlertDanger() {
    this.alertService.alertDanger('erro ao criar contato')
  }

}
