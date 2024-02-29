import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

const  Storage  = Preferences;

export const INTRO_KEY = 'intro-slides';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async setStorage(key: any, value: any){
    return await Storage.set({
      key,
      value
    });
  }

  getStorage(key: any){
    return Storage.get({key})
  }

  removeStorage(key: any){
    return Storage.remove({key})
  }
}
