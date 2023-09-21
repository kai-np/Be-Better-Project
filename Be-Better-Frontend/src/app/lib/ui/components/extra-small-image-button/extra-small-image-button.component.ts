import { Component, Input, OnInit } from '@angular/core';
import { SmallImageButton } from 'src/app/lib/data/models/ui/smallImageButton';

@Component({
  selector: 'ui-exs-img-button',
  templateUrl: './extra-small-image-button.component.html',
  styleUrls: ['./extra-small-image-button.component.scss'],
})
export class ExtraSmallImageButtonComponent implements OnInit {
  @Input() buttonInfo: SmallImageButton;
  constructor() {}

  ngOnInit() {}
}
