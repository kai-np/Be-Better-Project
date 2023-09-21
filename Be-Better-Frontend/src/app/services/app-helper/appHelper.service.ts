import { Injectable } from '@angular/core';
import { logInfo } from 'src/app/lib/data/models/ui/logInfo';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root',
})
export class AppHelperService {
  public apiEndpoint = 'http://localhost:999';
  servingService: logInfo = {
    logMode: 'debug',
    endPoint: 'APP',
  };
  constructor(private storage: Storage) {
    storage.create();
  }

  startLogger(logConfig: logInfo) {
    this.servingService = logConfig;
  }
  logData(data: any) {
    console.log(data);
  }

  log(message: string) {
    console.log(
      '[AH] | [' +
        this.servingService.endPoint +
        '] {' +
        this.servingService.logMode +
        '} >> ' +
        message
    );
  }

  async storeSet(key: string, value: any): Promise<any> {
    return new Promise((resolve) =>
      (async () => {
        const result = await this.storage.set(key, value);
        console.log('[StorageHandlerService] set value in storage:' + result);
        resolve(result);
      })().catch((reason) => {
        console.log(reason);
        resolve(undefined);
      })
    );
  }

  async storeGet(key: string): Promise<any> {
    return new Promise((resolve) =>
      (async () => {
        const result = await this.storage.get(key);
        resolve(result);
      })().catch((reason) => {
        console.log(reason);
        resolve(undefined);
      })
    );
  }

  async storeSetObject(key: string, object: any) {
    return new Promise((resolve) =>
      (async () => {
        const result = await this.storage.set(key, JSON.stringify(object));
        console.log('[StorageHandlerService] set object in storage:' + result);
        resolve(result);
      })().catch((reason) => {
        console.log(reason);
        resolve(undefined);
      })
    );
  }

  async storeGetObject(key: string): Promise<any> {
    return new Promise((resolve) =>
      (async () => {
        const result = await this.storage.get(key);
        if (result) {
          console.log(
            '[StorageHandlerService] get object in storage: %j',
            JSON.parse(result)
          );
          resolve(JSON.parse(result));
        }
        resolve(undefined);
      })().catch((reason) => {
        console.log(reason);
        resolve(undefined);
      })
    );
  }

  remove(key: string) {
    this.storage.remove(key);
  }

  /** Delete all data from your application */
  clear() {
    this.storage.clear();
  }
}
