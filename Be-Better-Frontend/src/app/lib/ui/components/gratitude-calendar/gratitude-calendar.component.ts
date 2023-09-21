import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { UserChallenge } from 'src/app/lib/data/models/challenges/userChallenge';
import { GratitudeJournalEntry } from 'src/app/lib/data/models/journals/gratitudeJournalEntry';
import { ExcerciseLogEntry } from 'src/app/lib/data/models/physcial/excerciseLogEntry';
import {
  gratitudeDataEntry,
  gratitudeDate,
} from 'src/app/lib/data/models/ui/gratitudeDate';
import { ImageButton } from 'src/app/lib/data/models/ui/imageButton';
import { ImageRectangleButton } from 'src/app/lib/data/models/ui/imageRectangleButton';
import { SmallImageButton } from 'src/app/lib/data/models/ui/smallImageButton';

@Component({
  selector: 'ui-gratitude-calendar',
  templateUrl: './gratitude-calendar.component.html',
  styleUrls: ['./gratitude-calendar.component.scss'],
})
export class GratitudeCalendarComponent implements OnInit, OnChanges {
  years: number[] = [];
  selectedMonth: number = new Date().getMonth();
  selectedYear: number = new Date().getFullYear();
  calendarDays: any[] = [];
  selectedDay: number | null = null;

  curentSelectedMonth: number;
  currentSelectedYear: number;

  @Output() dayClicked = new EventEmitter<gratitudeDate>();

  @Input() gratitudeJournals: GratitudeJournalEntry[];
  dateData: gratitudeDataEntry[] = [
    {
      date: new Date(this.selectedYear, this.selectedMonth, 4),
      image: '/assets/img/grat/happy.png',
    },
    {
      date: new Date(this.selectedYear, this.selectedMonth, 10),
      image: '/assets/img/gratitude/okay.png',
    },
  ];

  months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // Sample data with images for certain days

  generateDataEntries() {
    let dataEntries: gratitudeDataEntry[] = [];

    for (let entry of this.gratitudeJournals) {
      var dataEntry: gratitudeDataEntry = {
        date: new Date(entry.year, entry.month - 1, entry.day),
        image: '/assets/img/grat/' + entry.emotion + '.png',
      };
      dataEntries.push(dataEntry);
    }

    this.dateData = dataEntries;
  }

  constructor() {}

  ngOnInit(): void {
    this.initiateCalendar();
  }

  initiateCalendar() {
    this.generateDataEntries();
    this.generateYears();
    this.generateCalendar();
    this.selectedDay = 12;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initiateCalendar();
  }

  generateYears() {
    const currentYear = new Date().getFullYear();
    for (let i = currentYear - 10; i <= currentYear + 10; i++) {
      this.years.push(i);
    }
  }

  generateCalendar() {
    const firstDay = new Date(this.selectedYear, this.selectedMonth, 1);
    const lastDay = new Date(this.selectedYear, this.selectedMonth + 1, 0);
    const daysInMonth = lastDay.getDate();

    this.calendarDays = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(this.selectedYear, this.selectedMonth, i);
      const matchingData = this.dateData.find(
        (item) => currentDate.getTime() === item.date.getTime()
      );

      this.calendarDays.push({
        day: i,
        image: matchingData ? matchingData.image : '',
      });
    }
  }

  prevMonth() {
    if (this.selectedMonth === 0) {
      this.selectedYear--;
      this.selectedMonth = 11;
    } else {
      this.selectedMonth--;
    }
    this.generateCalendar();
  }

  nextMonth() {
    if (this.selectedMonth === 11) {
      this.selectedYear++;
      this.selectedMonth = 0;
    } else {
      this.selectedMonth++;
    }
    this.generateCalendar();
  }

  onMonthChange() {
    this.generateCalendar();
  }

  onYearChange() {
    this.generateCalendar();
  }

  onDayClick(dayIndex: number) {
    const clickedDate = new Date(
      this.selectedYear,
      this.selectedMonth,
      this.calendarDays[dayIndex].day
    );

    const data: gratitudeDate = {
      day: clickedDate.getDate(),
      month: clickedDate.getMonth() + 1,
      year: clickedDate.getFullYear(),
    };

    this.dayClicked.emit(data);

    if (this.selectedDay == this.calendarDays[dayIndex].day) {
      this.selectedDay = -1;
    } else {
      this.curentSelectedMonth = this.selectedMonth;
      this.currentSelectedYear = this.selectedYear;
      this.selectedDay = this.calendarDays[dayIndex].day;
    }
  }
}
