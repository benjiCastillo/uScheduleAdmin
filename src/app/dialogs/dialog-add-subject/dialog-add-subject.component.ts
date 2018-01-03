import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-dialog-add-subject',
  templateUrl: './dialog-add-subject.component.html',
  styleUrls: ['./dialog-add-subject.component.css']
})
export class DialogAddSubjectComponent implements OnInit {
  formValidate:boolean = false;
  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
     private dialogRef:MatDialogRef<DialogAddSubjectComponent>,
    @Inject(MAT_DIALOG_DATA) private data) { }

  ngOnInit() {
    console.log(this.data);
    this.form = this.formBuilder.group({
      acronym: new FormControl(this.dataValue('acronym'),[
        Validators.required,
        Validators.minLength(7)
      ]),
      name: new FormControl(this.dataValue('name'), Validators.required),
      semester: new FormControl(this.dataValue('semester'), Validators.required)
    })
  }

  submit(form){
    if(form.value.acronym == '' || form.value.acronym == '' || form.value.acronym == ''){
      this.formValidate = true;
    }else{
      this.formValidate = false;
      this.dialogRef.close(form.value);
    }
  }
  dataValue(value:string){
    if(this.data.id){ 
      switch (value) {
        case 'name':
        return this.data.subject.name
        case 'acronym':
        return this.data.subject.acronym
        case 'semester':
        return this.data.subject.semester
        default:
          return ''
      }
     
   }
    else{ return "" };
  }

  getValue(){
    return (this.data.id)? true: false;
  }

}
