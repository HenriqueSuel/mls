import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public listClubs = [
    {
      name: 'Atlanta United FC',
      link: 'AUFC',
      style: {
        'background-position': '0px -945px'
      }
    },
    {
      name: 'Chicago Fire',
      link: 'AUFC',
      style: {
        'background-position': '0px -45px'
      }
    },
    {
      name: 'FC Cincinnati',
      link: 'AUFC',
      style: {
        'background-position': '0px -1125px'
      }
    },
    {
      name: 'Colorado Rapids',
      link: 'AUFC',
      style: {
        'background-position': '0px -135px'
      }
    },
    {
      name: 'Columbus Crew',
      link: 'AUFC',
      style: {
        'background-position': '0px -180px'
      }
    },
    {
      name: 'FC Dallas',
      link: 'AUFC',
      style: {
        'background-position': '0px -270px'
      }
    },
    {
      name: 'D.C. United',
      link: 'AUFC',
      style: {
        'background-position': '0px -225px'
      }
    },
    {
      name: 'Houston Dynamo',
      link: 'AUFC',
      style: {
        'background-position': '0px -315px'
      }
    },
    {
      name: 'Los Angeles FC',
      link: 'AUFC',
      style: {
        'background-position': '0px -90px'
      }
    },
    {
      name: 'LA Galaxy',
      link: 'AUFC',
      style: {
        'background-position': '0px -360px'
      }
    },
    {
      name: 'Minnesota United FC',
      link: 'AUFC',
      style: {
        'background-position': '0px 0px'
      }
    },
    {
      name: 'Montreal Impact',
      link: 'AUFC',
      style: {
        'background-position': '0px -405px'
      }
    },
    {
      name: 'New England Revolution',
      link: 'AUFC',
      style: {
        'background-position': '0px -450px'
      }
    },
    {
      name: 'New York City FC',
      link: 'AUFC',
      style: {
        'background-position': '0px -540px'
      }
    },
    {
      name: 'New York Red Bulls',
      link: 'AUFC',
      style: {
        'background-position': '0px -495px'
      }
    },
    {
      name: 'Orlando City SC',
      link: 'AUFC',
      style: {
        'background-position': '0px -990px'
      }
    },
    {
      name: 'Philadelphia Union',
      link: 'AUFC',
      style: {
        'background-position': '0px -585px'
      }
    },
    {
      name: 'Portland Timbers',
      link: 'AUFC',
      style: {
        'background-position': '0px -630px'
      }
    },
    {
      name: 'Real Salt Lake',
      link: 'AUFC',
      style: {
        'background-position': '0px -675px'
      }
    },
    {
      name: 'San Jose Earthquakes',
      link: 'AUFC',
      style: {
        'background-position': '0px -720px'
      }
    },
    {
      name: 'Seattle Sounders FC',
      link: 'AUFC',
      style: {
        'background-position': '0px -765px'
      }
    },
    {
      name: 'Sporting Kansas City',
      link: 'AUFC',
      style: {
        'background-position': '0px -810px'
      }
    },
    {
      name: 'Toronto FC',
      link: 'AUFC',
      style: {
        'background-position': '0px -855px'
      }
    },
    {
      name: 'Vancouver Whitecaps FC',
      link: 'AUFC',
      style: {
        'background-position': '0px -900px'
      }
    },
    {
      name: 'Austin FC',
      link: 'AUFC',
      style: {
        'background-position': '0px -1170px'
      }
    },
    {
      name: 'Inter Miami CF',
      link: 'AUFC',
      style: {
        'background-position': '0px -1080px'
      }
    },
    {
      name: 'Nashville',
      link: 'AUFC',
      style: {
        'background-position': '0px -1035px'
      }
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
