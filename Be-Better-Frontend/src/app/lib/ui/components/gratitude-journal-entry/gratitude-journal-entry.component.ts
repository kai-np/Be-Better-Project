import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GratitudeJournalEntry } from 'src/app/lib/data/models/journals/gratitudeJournalEntry';
import { BasicButton } from 'src/app/lib/data/models/ui/basicButton';
import { gratitudeEmotions } from 'src/app/lib/data/models/ui/gratitudeEmotions';
import { gratitudeEntrySave } from 'src/app/lib/data/models/ui/gratitudeEntrySave';
import { gratitudeEntrySettings } from 'src/app/lib/data/models/ui/gratitudeEntrySettings';
import { ImageButton } from 'src/app/lib/data/models/ui/imageButton';
import { SmallImageButton } from 'src/app/lib/data/models/ui/smallImageButton';

@Component({
  selector: 'ui-gratitude-journal-entry',
  templateUrl: './gratitude-journal-entry.component.html',
  styleUrls: ['./gratitude-journal-entry.component.scss'],
})
export class GratitudeJournalEntryComponent implements OnInit {
  @Input() config: gratitudeEntrySettings;
  @Output() newEntry = new EventEmitter<gratitudeEntrySave>();
  @Input() gratitudeEntry?: GratitudeJournalEntry;
  @Output() createMode = new EventEmitter();

  // angry, stresed, sad, okay, happy
  selectableEmotions: gratitudeEmotions[] = [
    { name: 'angry' },
    { name: 'stressed' },
    { name: 'sad' },
    { name: 'okay' },
    { name: 'happy' },
  ];

  selectedMood = 'none';
  constructor() {}

  backToToday() {
    this.createMode.emit();
  }

  moodSelected(name: string) {
    if (this.selectedMood == name) {
      this.selectedMood = 'none';
    } else {
      this.selectedMood = name;
    }
  }

  saveJournal(entries: string[]) {
    const day = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const data = {
      entries: entries,
      emotion: this.selectedMood,
      day: day,
      month: month,
      year: year,
    };
    this.newEntry.emit(data);
  }

  buttonClickedEmit(buttonName: string) {}

  ngOnInit() {}
}
