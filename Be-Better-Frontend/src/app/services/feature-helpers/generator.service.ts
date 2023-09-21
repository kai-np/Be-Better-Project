import { Injectable } from '@angular/core';




interface GoalInfo {
  goalID?: string;
  userID?: string;
  goalFrequency: string;
  goalType: string;
  goalTitle: string;
  goalDescription: string;
  goalStatus?: string;
  dateAdded?: string;
  goalStatCounts?: { completedCount: number; failedCount: number };
}

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor() { }

  private getRandomString(): string {
    const words = ['word1', 'word2', 'word3', 'word4', 'word5'];
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }

  private getRandomNumber(): number {
    return Math.floor(Math.random() * 101); // Random number between 0 and 100
  }


  generateRandomGoalsArray(count: number): GoalInfo[] {
    const randomGoals: GoalInfo[] = [];
    for (let i = 0; i < count; i++) {
      randomGoals.push(this.generateRandomGoalInfo());
    }
    return randomGoals;
  }
  generateRandomGoalInfo(): GoalInfo {
    return {
      goalID: this.getRandomString(),
      userID: this.getRandomString(),
      goalFrequency: ['daily', 'weekly', 'monthly', 'yearly', 'once'][Math.floor(Math.random() * 5)],
      goalType: ['default', 'short-term', 'long-term', 'fitness'][Math.floor(Math.random() * 4)],
      goalTitle: this.getRandomString(),
      goalDescription: this.getRandomString(),
      goalStatus: ['incomplete', 'complete'][Math.floor(Math.random() * 2)],
      dateAdded: new Date().toISOString(),
      goalStatCounts: {
        completedCount: this.getRandomNumber(),
        failedCount: this.getRandomNumber(),
      },
    };
  }
}
