import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() set progress(val: number) {
    this._progress = val;
  }
  private _progress = 50;
  get progress() {
    return this._progress;
  }
  @Input() backgroundColor = '#ccc';
  @Input('progress-color') progressColor = 'tomato';

  constructor() {
    // console.log({
    //   location: 'constructor',
    //   progress: this.progress,
    //   bacgroundColor: this.backgroundColor,
    //   progressColor: this.progressColor,
    // });
  }
  ngOnInit() {
    console.log('onInit', {
      location: 'ngOnInit',
      progress: this.progress,
      bacgroundColor: this.backgroundColor,
      progressColor: this.progressColor,
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('onChange', {
      location: 'ngOnChanges',
      progress: this.progress,
      bacgroundColor: this.backgroundColor,
      progressColor: this.progressColor,
    });
  }
}
