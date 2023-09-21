import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TextJournalEntry } from 'src/app/lib/data/models/journals/textJournalEntry';
import { ImageButton } from 'src/app/lib/data/models/ui/imageButton';

@Component({
  selector: 'ui-journal-list-item',
  templateUrl: './journal-list-item.component.html',
  styleUrls: ['./journal-list-item.component.scss'],
})
export class JournalListItemComponent implements OnInit {
  @Input() journalInfo: TextJournalEntry;

  @Output() journalClicked = new EventEmitter();

  constructor() {}

  journalClickedEmit() {
    this.journalClicked.emit(this.journalInfo);
    //this.buttonClicked.emit(this.challengeInfo.challengeID);
  }

  ngOnInit() {}
}
