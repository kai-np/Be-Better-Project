import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageButton } from 'src/app/lib/data/models/ui/imageButton';
import { ScrollButton } from 'src/app/lib/data/models/ui/scrollButton';
import { SmallImageButton } from 'src/app/lib/data/models/ui/smallImageButton';

@Component({
  selector: 'ui-scroll-image-button',
  templateUrl: './scroll-image-button.component.html',
  styleUrls: ['./scroll-image-button.component.scss'],
})
export class ScrollImageButtonComponent implements OnInit {
  @Input() buttonInfo: ScrollButton;
  @Output() buttonClicked = new EventEmitter();
  constructor() {}

  buttonClickedEmit(buttonName: string) {
    this.buttonClicked.emit(buttonName);
  }

  ngOnInit() {}
}
