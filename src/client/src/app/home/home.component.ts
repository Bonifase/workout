import { Component, OnInit } from '@angular/core';

const routines = [
  {
    name: 'ABS AND CORE EXERCISES',
  },
  {
    name: 'BACK EXERCISES',
  },
  {
    name: 'ARM EXERCISES',
  },
  {
    name: 'SHOULDER EXERCISES',
  },
  {
    name: 'LEG EXERCISES',
  },
  {
    name: 'CHEST EXERCISES',
  },
];
const tips = [
  {
    title: '10 WAYS TO RECOVER QUICKLY AFTER AN INTENSE WORKOUT',
    img:
      'https://www.muscleandfitness.com/wp-content/uploads/2016/09/outside-promo0.jpg?w=560&h=315&crop=1',
  },
  {
    title: '6 ESSENTIAL KETTLEBELL EXERCISES FOR MORE MUSCLE',
    img:
      'https://www.muscleandfitness.com/wp-content/uploads/2019/10/Brandon-Hendrickson-Posing-On-Barbell.jpg?w=560&h=315&crop=1',
  },
  {
    title: 'THE TOP 5 EXERCISES TO BUILD A BIGGER BACK',
    img:
      'https://www.muscleandfitness.com/wp-content/uploads/2017/10/1109-narrow-grip-pushup-lean.jpg?w=560&h=315&crop=1',
  },
  {
    title: 'WORK OUT DAILY TO BOOST YOUR IMMUNITY',
    img:
      'https://www.muscleandfitness.com/wp-content/uploads/2020/03/man-workout-TeroVesalainen_1132413017.jpg?w=560&h=315&crop=1',
  },
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  routines = routines;
  showForm: boolean = false;
  tips = tips;
  constructor() {}

  ngOnInit() {}
}
