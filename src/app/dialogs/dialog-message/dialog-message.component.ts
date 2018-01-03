import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-message',
  templateUrl: './dialog-message.component.html',
  styleUrls: ['./dialog-message.component.css']
})


export class DialogMessageComponent implements OnInit {
  info: Object;

  constructor(public dialogRef: MatDialogRef<DialogMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
  }

  ngOnInit() {
  }
  actionSubject(id, action) {
    console.log(action + ' ' + id);
    this.info = { 'id': id, 'action': action };
    this.dialogRef.close(this.info)
  }
}
