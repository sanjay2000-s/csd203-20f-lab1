import { Injectable } from '@angular/core';
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, CameraPhoto,
  CameraSource } from '@capacitor/core';
const { Camera, Filesystem, Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})

export class PhotoService {
  public photos: Photo[] = [];
  private PHOTO_STORAGE: string = "photos";

  private async savePicture(cameraPhoto: CameraPhoto) { 

    

    // Convert photo to base64 format, required by Filesystem API to save
    const base64Data = await this.readAsBase64(cameraPhoto);
 // Write the file to the data directory
    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: FilesystemDirectory.Data
    });
 // Use webPath to display the new image instead of base64 since it's
 // already loaded into memory
 return {
   filepath: fileName,
   webviewPath: cameraPhoto.webPath
 };

}
  constructor() { }
  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
    quality: 100
    });

    // Save the picture and add it to photo collection
  const savedImageFile = await this.savePicture(capturedPhoto);

  this.photos.unshift(savedImageFile);
  Storage.set({
    key: this.PHOTO_STORAGE,
    value: JSON.stringify(this.photos)
   });
  
   public async loadSaved() {
    // Retrieve cached photo array data
      const photos = await Storage.get({ key: this.PHOTO_STORAGE });
      this.photos = JSON.parse(photos.value) || [];
      // Display the photo by reading into base64 format
      for (let photo of this.photos) {
      // Read each saved photo's data from the Filesystem
      const readFile = await Filesystem.readFile({
        path: photo.filepath,
        directory: FilesystemDirectory.Data
      });
    // Web platform only: Load the photo as base64 data
      photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
    }
  }
   }

  }
}

interface Photo {
 filepath: string;
 webviewPath: string;
}
