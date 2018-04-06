import { Injectable } from '@angular/core';
import { Api } from '../api/api';

@Injectable()
export class UploadService {

  requestUrl: string;
  responseData: any;
  handleError: any;

  constructor(public api: Api) { }

  postWithFile (url: string, postData: any, files: File[]) {

    let headers = new Headers();
    /** No need to include Content-Type in Angular 4 */
    headers.append('enctype', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    let options:any = { headers: headers };
    let formData:FormData = new FormData();
    formData.append('files', files[0], files[0].name);
    console.log("FILESSS >> ", files);

    var returnReponse = new Promise((resolve: any, reject: any) => {
      this.api.post( url, formData, options).subscribe(
          (res: any) => {
            this.responseData = res.json();
            resolve(this.responseData);
          },
          error => {
            alert(error);
          }
      );
    });
    return returnReponse;
}
uploadFile(url,files:File):Promise<any> {
    return new Promise((resolve, reject) => {

        let xhr:XMLHttpRequest = new XMLHttpRequest();

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(<any>JSON.parse(xhr.response));
                } else {
                    reject(xhr.response);
                }
            }
        };

        xhr.open('POST', url, true);
        console.log("FILE>>>> ", files);
        let formData = new FormData();
        formData.append("file", files[0]);

        formData.append("title", "dummy");
        formData.append("desc", "dummy");
        formData.append("subcategoryId", "324125");
        formData.append("occasionTypes", '[]');
        formData.append("clothTypes", '[]');
        formData.append("bodyTypes", '[]');
        formData.append("backTypes", '[]');
        xhr.send(formData);
    });
}
file_update(url:any,files:any) {
  if(files.length > 0) {
      const file = files[0];
      const formData = new FormData();
      formData.append('file', file);

      const headers = new Headers({'Content-Type':'multipart/form-data'});
      headers.append("Content-Type", "application/json");

      this.api.post(url, formData, {headers: headers}).subscribe((res: any) => res.json());

    }
}

}
