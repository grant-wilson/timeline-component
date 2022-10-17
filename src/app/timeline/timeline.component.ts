import { Component, Input, OnInit } from '@angular/core';

export type TimelineEvent = {
  date: Date;
  title: string;
  description: string;
};

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent implements OnInit {
  @Input()
  data?: TimelineEvent[];

  constructor() {}

  ngOnInit(): void {}
}
