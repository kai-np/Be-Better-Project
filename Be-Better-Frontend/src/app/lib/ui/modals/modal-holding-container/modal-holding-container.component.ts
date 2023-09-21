import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ButtonShelfInfo } from 'src/app/lib/data/models/ui/buttonShelf';
import { ImageButton } from 'src/app/lib/data/models/ui/imageButton';
import { SmallImageButton } from 'src/app/lib/data/models/ui/smallImageButton';

@Component({
  selector: 'ui-modal-holding-container',
  templateUrl: './modal-holding-container.component.html',
  styleUrls: ['./modal-holding-container.component.scss'],
})
export class ModalHoldingComponent implements OnInit {
  constructor(private modalController: ModalController) {}
  closeModal() {
    this.modalController.dismiss();
  }
  ngOnInit() {}
}
