import {Component, Optional} from '@angular/core';
import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';

@Component({
  selector: 'dialog-comp',
  templateUrl: 'app.component.html',
 
})
export class DialogComponent{
    constructor(private _dialog: MdDialog, private _snackbar: MdSnackBar) {
    // Update the value for the progress-bar on an interval.
   openDialog() {
    let dialogRef = this._dialog.open(DialogContent);

    dialogRef.afterClosed().subscribe(result => {
      this.lastDialogResult = result;
    })
  }
}
}
@Component({
  template: `
    <p>This is a dialog</p>
    <p>
      <label>
        This is a text box inside of a dialog.
        <input #dialogInput>
      </label>
    </p>
    <p> <button md-button (click)="dialogRef.close(dialogInput.value)">CLOSE</button> </p>
  `,
})

export class DialogContent {
  constructor(@Optional() public dialogRef: MdDialogRef<DialogContent>) { }
}