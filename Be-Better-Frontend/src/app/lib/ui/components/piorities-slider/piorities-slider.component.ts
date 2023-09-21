import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ButtonShelfInfo } from 'src/app/lib/data/models/ui/buttonShelf';
import { ImageButton } from 'src/app/lib/data/models/ui/imageButton';
import { SmallImageButton } from 'src/app/lib/data/models/ui/smallImageButton';

@Component({
  selector: 'ui-button-shelf',
  templateUrl: './piorities-slider.component.html',
  styleUrls: ['./piorities-slider.component.scss'],
})
export PrioritiesSliderComponent implements OnInit {
  @Input() shelfButtons: ImageButton[];
  @Input() shelfInfo: ButtonShelfInfo;
  @Output() buttonClicked = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
