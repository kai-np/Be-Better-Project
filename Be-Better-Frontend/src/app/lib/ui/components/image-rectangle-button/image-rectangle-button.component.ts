import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageButton } from 'src/app/lib/data/models/ui/imageButton';
import { ImageRectangleButton } from 'src/app/lib/data/models/ui/imageRectangleButton';
import { SmallImageButton } from 'src/app/lib/data/models/ui/smallImageButton';

@Component({
  selector: 'ui-rectangle-img-button',
  templateUrl: './image-rectangle-button.component.html',
  styleUrls: ['./image-rectangle-button.component.scss'],
})
export class RectangleImageButtonComponent implements OnInit {
  @Input() buttonInfo: ImageRectangleButton;

  @Output() buttonClicked = new EventEmitter();
  constructor() {}

  buttonClickedEmit(buttonName: string) {
    this.buttonClicked.emit(buttonName);
  }

  ngOnInit() {}
}
