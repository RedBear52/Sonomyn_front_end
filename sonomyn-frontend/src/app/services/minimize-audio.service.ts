import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class MinimizeAudioService {
  private url = 'http://localhost:3000/api/reduce-15mb'

  constructor(private http: HttpClient) {}

  minimizeAudio(file: File) {
    const formData = new FormData()
    formData.append('inputFile', file)

    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    })

    console.log('minimizing audio file...')

    return this.http.post(this.url, formData, { headers })
  }
}
