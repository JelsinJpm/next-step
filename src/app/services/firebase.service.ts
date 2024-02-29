import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from 'firebase/auth'
import { User } from '../models/user.model';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { getFirestore, setDoc, doc, getDoc, addDoc, collection, collectionData, query, updateDoc, deleteDoc, Firestore } from '@angular/fire/firestore'
import { UtilsService } from './utils.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { getStorage, uploadString, ref, getDownloadURL, deleteObject } from 'firebase/storage'
import { StorageService } from './storage.service';

export const user_key = "next_step_user_id";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);
  storage = inject(AngularFireStorage);
  utilsSvc = inject(UtilsService);
  storag = inject(StorageService);
  _fireStore = inject(Firestore)

  getAuth(){
    return getAuth();
  }

  async singIn(user: User){
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  singUp(user: User){
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password)
  }

  singOut(){
    getAuth().signOut();
    localStorage.removeItem('user');
    this.utilsSvc.routerLink('/auth-screen');
  }

  // BASE DE DATOS //

  // Obtener documentos de una colección
  getCollectionData(path: string, collectionQuery?: any){
    const ref = collection(getFirestore(), path);
    return collectionData(query(ref, collectionQuery), {idField: 'id'})
  }

  // Setear un documento
  setDocument(path: string, data: any){
    return setDoc(doc(getFirestore(), path), data);
  }

  // Actualizar un documento
  updateDocument(path: string, data: any){
    return updateDoc(doc(getFirestore(), path), data);
  }

  // Eliminar un documento
  deleteDocument(path: string){
    return deleteDoc(doc(getFirestore(), path));
  }

  // Obtener un documento
  async getDocument(path: string){
    return (await getDoc(doc(getFirestore(), path))).data();
  }

  // Agregar un documento
  addDocument(path: string, data: any){
    return addDoc(collection(getFirestore(), path), data);
  }

  updateUser(displayName: string) {
    return updateProfile(getAuth().currentUser, {displayName})
  }

  sendRecoveryEmail(email: string){
    return sendPasswordResetEmail(getAuth(), email);
  }

  // ALMACENAMIENTO

  // Subir imagen
  async uploadImage(path: string, data_url: string){
    await uploadString(ref(getStorage(), path), data_url, 'data_url');
    return await getDownloadURL(ref(getStorage(), path));
  }

  // Obtener ruta de la imagen con su url
  async getFilePath(url: string){
    return ref(getStorage(), url).fullPath
  }

  // Eliminar archivos de storage
  deleteFil(path: string){
    return deleteObject(ref(getStorage(), path))
  }
}
