import { Component } from '@angular/core'
import { MinimizeAudioService } from '../../services/minimize-audio.service'
import { trigger, state, style, animate, transition } from '@angular/animations'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  file: File | undefined
  fileUrl: string | undefined
  loading = false
  blobUrl: string | undefined = ''
  pulseState: string = 'default'

  constructor(private minimizeAudioService: MinimizeAudioService) {}

  async onSubmit() {
    console.log('file submitted')

    if (!this.file) {
      alert('Please select an audio file.') // Display an error message
      return
    }
    if (this.file && this.file.size < 15000000) {
      alert('Please select an audio file larger than 15MB.') // Display an error message
      return
    }

    this.loading = true

    this.minimizeAudioService
      .minimizeAudio(this.file)
      .subscribe((response: Blob) => {
        console.log(response)

        const contentType = response.type
        const file = new File([response], 'minimized-audio.zip', {
          type: contentType,
        })

        this.file = file
        console.log(this.file)
        this.loading = false
        this.blobUrl = URL.createObjectURL(this.file)
        console.log(this.blobUrl)

        console.log('Audio file minimized successfully.')
      })
  }

  onDownload() {
    const a = document.createElement('a')
    // a.href = blobUrl
    a.download = 'audioFiles.zip'
    a.click()
    this.clearSelectedAudio()
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0]
    console.log(this.file)
  }

  clearSelectedAudio() {
  
  }
}
