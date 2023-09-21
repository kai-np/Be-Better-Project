export interface learnEntry {
    entryName: string;
    entryVideos: learnVideoEntry[];
    entryLinks: learnLinkEntry[];
    entryOverview: string;
    entryAbout: string;
    entryClinically: string;
    entryTips: string;
    entryTitle: string;
}

export interface learnVideoEntry {
    videoName: string;
    videoURL: string;
}

export interface learnLinkEntry {
    linkName: string;
    linkURL: string;
}