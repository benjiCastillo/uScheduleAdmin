import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../services/subject.service';
import { Observable } from 'rxjs/Rx';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatDialogRef, MatDialog, ErrorStateMatcher, MatSnackBar } from '@angular/material';
import { DialogAddSubjectComponent } from '../dialogs/dialog-add-subject/dialog-add-subject.component';
import { DialogMessageComponent } from '../dialogs/dialog-message/dialog-message.component';
import { Subject } from '../model/subject';
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  subjectService: any;
  subjects = null;
  loadSubjects: boolean = false;
  dialogAddSubject: MatDialogRef<DialogAddSubjectComponent>;
  dialogMessage: MatDialogRef<DialogMessageComponent>;


  constructor(subjectService: SubjectService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) {
    this.subjectService = subjectService;
  }


  ngOnInit() {
    this.getSubject();
  }

  getSubject() {
    this.loadSubjects = true;
    this.subjectService.getSubjects()
      .subscribe(
      data => {
        this.subjects = data;
        this.subjects = Object.keys(this.subjects).map((key) => this.subjects[key]);
        this.loadSubjects = false;
      },
      err => {
        console.log(err);
      }
      )
  }

  openFileDialog(subject?: Subject, id?: string) {
    if (id) {
      console.log('editando')
      this.dialogAddSubject = this.dialog.open(DialogAddSubjectComponent, {
        data: {
          subject:subject,
          id:id
        },
        width: '250px'
      });
      this.dialogAddSubject
        .afterClosed()
        .subscribe(
        data => {
          if (data != '') this.updateSubject(data,id);
        },
        err => {
          console.log(err);
        }
        )

    } else {
      console.log('insertando')

      this.dialogAddSubject = this.dialog.open(DialogAddSubjectComponent, {
        data: {},
        width: '250px'
      });
      this.dialogAddSubject
        .afterClosed()
        .subscribe(
        data => {
          if (data != '') this.addSubject(data);
        },
        err => {
          console.log(err);
        }
        )
    }

  }



  openDialog(id, action, title, content) {
    this.dialogMessage = this.dialog.open(DialogMessageComponent, {
      data: {
        title: title,
        action: action,
        content: content,
        id: id
      },
      width: '400px'
    })
    this.dialogMessage
      .afterClosed()
      .subscribe(
      data => {
        if (data != '') {
          if (data.action == 'delete') {
            this.deleteSubject(data.id);
          }
        }

      },
      err => {
        console.log(err);
      }
      )


  }

  addSubject(data) {
    this.openSnackbar("Datos Enviados", '', 1000);
    this.subjectService.addSubject(data)
      .subscribe(
      data => {
        this.openSnackbar("Insertado Con Exito", '', 2000);
        this.getSubject();
      },
      err => {
        console.log(err)
        this.openSnackbar("Error al Insertar", '', 2000);
      }
      )
  }
  updateSubject(data, id) {
    this.openSnackbar("Datos Enviados", '', 1000);
    this.subjectService.updateSubject(data, id)
      .subscribe(
      data => {
        this.openSnackbar('Actualizado con exito', '', 2000);
        this.getSubject();
      },
      err => {
        console.log(err)
        this.openSnackbar('Error al Actualizar', '', 2000);
      }
      )
  }

  deleteSubject(id) {
    this.openSnackbar("Procesando...", '', 1000);
    this.subjectService.deleteSubject(id)
      .subscribe(
      data => {
        this.openSnackbar('Eliminado con exito', '', 2000);
        this.getSubject();
      },
      err => {
        console.log(err);
        this.openSnackbar('Error al Eliminar', '', 2000);
      }
      )
  }

  openSnackbar(message: string, action: string, duration: number) {
    this.snackBar.open(message, action, {
      duration: duration,
    });
  }
}
