import { Component } from '@angular/core'
import { MinimizeAudioService } from '../../services/minimize-audio.service'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  file: File | undefined
  loading = false

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
      .subscribe((response: any) => {
        console.log(response)
        this.file = response.file
        console.log(this.file)
        this.loading = false

        alert('Audio file minimized successfully.') // Display a success message
        window.location.reload()

        console.log('Audio file minimized successfully.')
      })
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0]
    console.log(this.file)
  }
}
