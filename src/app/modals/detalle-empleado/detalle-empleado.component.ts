import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatasourceService } from 'src/app/servicios/datasource.service';
import * as moment from 'moment';
import { Sex } from 'src/app/interfaces/sex';
import { Country } from 'src/app/interfaces/country';

@Component({
    selector: 'app-detalle-empleado',
    templateUrl: './detalle-empleado.component.html',
    styleUrls: ['./detalle-empleado.component.scss'],
    providers: [DatasourceService]
})
export class DetalleEmpleadoComponent implements OnInit {

    form: FormGroup;

    sex: Sex[] = [];
    country: Country[] = [];

    constructor(
        private sDatasource: DatasourceService,
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<DetalleEmpleadoComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    ngOnInit() {
      this.sDatasource.getDatasource().subscribe((result: any)  => {
        this.sex = result.data.sex;
        this.country = result.data.country;
        this.buildForm(this.data.item);
        console.log(this.data);

        this.getCountry(this.data.item['country-id']);
      });
    }

    buildForm(item: any) {
        this.form = this.fb.group({
            name: [item.name, ''],
            surname: [item.surname, ''],
            surname2: [item.surname2, ''],
            sex: [this.getSex(item.sex) ? this.getSex(item.sex) : 'Sin informar.', ''],
            country: [this.getCountry(item['country-id']) ? this.getCountry(item['country-id']) : 'Sin informar.', ''],
            phone: [item.phone, ''],
            datebirthday: [moment(item.datebirthday).format('DD/MM/YYYY'), ''],
            lastModification: [moment(item.datebirthday).format('DD/MM/YYYY'), '']
        });
    }

    getSex(key: string): string | undefined {
      return this.sex.find(x => x.key === key)?.description;
    }

    getCountry(id: number): string | undefined {
      return this.country.find(x => x.id === id)?.description;
    }

    submit() {
      this.dialogRef.close(this.form.value);
    }
}
