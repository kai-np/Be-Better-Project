import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageButton } from 'src/app/lib/data/models/ui/imageButton';

@Component({
  selector: 'ui-extra-large-rectangle-button',
  templateUrl: './extra-large-rectangle-button.component.html',
  styleUrls: ['./extra-large-rectangle-button.component.scss'],
})
export class ExtraLargeRectangleButtonComponent implements OnInit {
  @Input() buttonInfo: ImageButton;

  @Output() buttonClicked = new EventEmitter();

  constructor() {}

  buttonClickedEmit() {
    this.buttonClicked.emit(this.buttonInfo.buttonName);
  }

  ngOnInit() {}
}
