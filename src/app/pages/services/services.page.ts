
import { Component, OnInit } from '@angular/core';
import { Serviceitem } from '../../interface/serviceitem';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
  standalone: false,
})
export class ServicesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  services: Serviceitem[] = [
    {
      icon: 'phone-potrait-outline',
      title: 'CONSULTATIONS',
      description: 'lorem ipsum dolor sit amet consectetur adipiscing elit autem lorem mollitia adipiscing non facere in est pariatur proident aliquip eos ducimus maxime anim eos eu culpa dolorem culpa ut corrupti dolores est non esse eligendi'
    },
        {
      icon: 'bulb',
      title: 'BEST IDEAS',
      description: 'lorem ipsum dolor sit amet consectetur adipiscing elit autem lorem mollitia adipiscing non facere in est pariatur proident aliquip eos ducimus maxime anim eos eu culpa dolorem culpa ut corrupti dolores est non esse eligendi'
    },
        {
      icon: 'settings',
      title: 'SIMPLE SETTINGS',
      description: 'lorem ipsum dolor sit amet consectetur adipiscing elit autem lorem mollitia adipiscing non facere in est pariatur proident aliquip eos ducimus maxime anim eos eu culpa dolorem culpa ut corrupti dolores est non esse eligendi'
    },
  ]



}
