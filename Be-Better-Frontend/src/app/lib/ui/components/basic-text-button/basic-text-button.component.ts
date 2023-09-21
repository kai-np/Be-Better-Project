import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BasicButton } from 'src/app/lib/data/models/ui/basicButton';
import { ImageButton } from 'src/app/lib/data/models/ui/imageButton';
import { SmallImageButton } from 'src/app/lib/data/models/ui/smallImageButton';

@Component({
  selector: 'ui-basic-text-button',
  templateUrl: './basic-text-button.component.html',
  styleUrls: ['./basic-text-button.component.scss'],
})
export class BasicTextButtonComponent implements OnInit {
  @Input() buttonInfo: BasicButton;
  @Output() buttonClicked = new EventEmitter();
  constructor() {}

  buttonClickedEmit(buttonName: string) {
    this.buttonClicked.emit(buttonName);
  }

  ngOnInit() {}
}
