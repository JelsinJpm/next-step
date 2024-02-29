import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from '@angular/fire/auth';
import { Firestore, doc, getDoc, setDoc } from '@angular/fire/firestore';
import { INTRO_KEY, StorageService } from '../storage.service';
import { Router } from '@angular/router';

export const user_key = "next_step_user_id";
export const user_data_key = "next_step_user_data";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( 
    private router: Router,
    private _fireAuth: Auth,
    private _fireStore: Firestore,
    private storage: StorageService
  ) { }

  async register(formValue: any){
    try{
      const registerUser = await createUserWithEmailAndPassword(this._fireAuth, formValue.email, formValue.password)
      console.log("register user: ", registerUser);
      const uid = registerUser.user.uid;
      const dataRef = doc(this._fireStore, `users/${uid}`);
      const data = {
        email: formValue.email,
        username: formValue.username
      }
      setDoc(dataRef, data);
      await this.storage.setStorage(user_key, uid);
      return uid;
    } catch(e){
      throw(e);
    }
  }

  async login(formValue: any): Promise<any>{
    try{
      const response = await signInWithEmailAndPassword(this._fireAuth, formValue.email, formValue.password)
      console.log("login user: ", response);
      if(response?.user){
        const uid = response.user.uid
        const userDocRef = doc(this._fireStore, 'users', uid);
        const userDocSnapshot = await getDoc(userDocRef);
        const userData = userDocSnapshot.data();
        await this.storage.setStorage(user_key, uid);
        console.log("Info user:", userData);
        
        return uid;
      } else {
        return false;
      }
    } catch(e){
      throw(e);
    }
  }

  sendRecoveryEmail(email: string){
    return sendPasswordResetEmail(getAuth(), email)
  }

  checkAuth(){
    return new Promise((resolve, reject) => {
      onAuthStateChanged(this._fireAuth, user => {
        if(user) resolve(true);
        resolve(false);
      })
    })
  }

  async logout(){
    try{
      await signOut(this._fireAuth);
      await this.storage.removeStorage(user_key)
      return true
    } catch(e){
      throw(e);
    }
  }

  async getUserDataFromStorage(): Promise<any> {
    const userId = this.storage.getStorage(user_key);
    if (userId) {
      // Si hay un ID de usuario en el almacenamiento, obtener los datos del usuario asociados
      const userData = await this.storage.getStorage(user_data_key);
      return userData ? JSON.parse(userData.value) : null;
    }
    return null; // Devolver nulo si no se encuentra el ID de usuario en el almacenamiento
  }

  async introGuard() {
    const hasSeenIntro = await this.storage.getStorage(INTRO_KEY);
    if(hasSeenIntro && hasSeenIntro.value == 'true') {
      return true;
    } else {
      this.router.navigateByUrl('/intro', {replaceUrl: true});
      return true;
    }
  }

  authGuard() {
    return this.checkAuth().then(response => {
      console.log(response);
     if(response) return true;
     this.navigate();
     return false;
    })
    .catch(e => {
     this.navigate();
     return false;
    });
  }

  navigate() {
   this.router.navigateByUrl('/auth-screen', {replaceUrl: true});
  }
}
