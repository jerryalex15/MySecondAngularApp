export class AppareilService {
  appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      id: 2,
      name: 'Frigo',
      status: 'allumé'
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  switchOnAll() : void {
    for (let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
  }
  switchOffAll() :void {
    for (let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
  }
  switchOnOne( i: number){
    this.appareils[i].status = "allumé";
  }
  switchOffOne( i: number){
    this.appareils[i].status = "éteint";
  }

  getAppareilById(id: number) : any{
    const appareil = this.appareils.find((app) => {
      return app.id === id;
    });
    return appareil;
  }
}