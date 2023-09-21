import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageButton } from 'src/app/lib/data/models/ui/imageButton';
import { SmallImageButton } from 'src/app/lib/data/models/ui/smallImageButton';

@Component({
  selector: 'ui-circle-img-button',
  templateUrl: './circle-image-button.component.html',
  styleUrls: ['./circle-image-button.component.scss'],
})
export class CircleImageButtonComponent implements OnInit {
  @Input() buttonInfo: ImageButton;
  @Input() buttonSize: string = 'default';
  @Output() buttonClicked = new EventEmitter();
  constructor() {}

  buttonClickedEmit(buttonName: string) {
    this.buttonClicked.emit(buttonName);
  }

  ngOnInit() {}
}
