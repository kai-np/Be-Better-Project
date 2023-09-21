if (journalInfo.journalType == 'personal') {
    this.pageHeaderBGColour = '#E71279';
    this.pageHeaderTitle = 'Add Personal Journal';
    this.journalType = journalInfo.journalType;
  } else if (journalInfo.journalType == 'public') {
    this.pageHeaderBGColour = '#6C3A93';
    this.pageHeaderTitle = 'Add Public Journal';
    this.journalType = journalInfo.journalType;
  } else {
    this.router.navigate(['/journals']);
  }