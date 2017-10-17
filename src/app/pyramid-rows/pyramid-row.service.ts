import { Injectable } from '@angular/core';
import { Animal } from '../Animal.model';

@Injectable()
export class PyramidRow {
  level1 : Animal[];
  level2 : Animal[];
  level3 : Animal[];
  level4 : Animal[];
  level5 : Animal[];

  constructor() {
    this.level1 = [
      new Animal ("Simba", 5, "Lion", "https://lumiere-a.akamaihd.net/v1/images/character_thelionking_simba_a4161276.jpeg?region=0,0,450,450&width=160"),
      new Animal ("Mufasa", 5, "Lion", "https://lumiere-a.akamaihd.net/v1/images/character_thelionking_mufasa_5a85a627.jpeg?region=0,0,450,450&width=160"),
      new Animal ("Bruce", 5, "Shark", "https://vignette.wikia.nocookie.net/disney/images/a/a5/Bruce-FN.png/revision/latest/scale-to-width-down/516?cb=20131111065729"),
    ];
    this.level2 = [
        new Animal ("Pumbaa", 4, "Warthog", "https://lumiere-a.akamaihd.net/v1/images/character_thelionking_pumbaa_f93fcd3e.jpeg?region=0,0,450,450&width=160"),
        new Animal ("Nala", 4, "Lion", "https://www.mylionking.com/resources/site_images/tp_characters_nala.jpg"),
        new Animal ("Timon", 4, "Meerkat", "https://www.mylionking.com/resources/site_images/tp_characters_timon.jpg"),
        new Animal ("Tiger", 4, "Tiger", "https://lumiere-a.akamaihd.net/v1/images/d97be3597bae8541c4de53aa8741d30b34b76dac.jpeg?region=0%2C0%2C600%2C600"),
    ];
    this.level3 = [
        new Animal ("Rafiki", 3, "Baboon", "https://www.mylionking.com/resources/site_images/lk_characters_rafiki.jpg"),
        new Animal ("Winnie", 3, "Bear", "https://lumiere-a.akamaihd.net/v1/images/c94eed56a5e84479a2939c9172434567c0147d4f.jpeg?region=0%2C0%2C600%2C600"),
        new Animal ("Piglet", 3, "Pig", "https://lumiere-a.akamaihd.net/v1/images/9e259a68c3fceb6265860399bfc98fb56e098960.jpeg?region=0%2C0%2C600%2C600"),
        new Animal ("Eeyore", 3, "Donkey", "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-11ej849_779819a7.jpeg?region=0%2C0%2C600%2C600"),
        new Animal ("Bailey", 3, "Dolphin", "https://vignette.wikia.nocookie.net/disney/images/3/3f/Bailey_Render.jpg/revision/latest/scale-to-width-down/516?cb=20160330202204"),
    ];
    this.level4 = [
        new Animal ("Ma", 2, "Meerkat", "https://www.mylionking.com/resources/site_images/tp_characters_ma.jpg"),
        new Animal ("Nick Wilde", 2, "Fox", "https://vignette.wikia.nocookie.net/zootopia/images/3/3e/Nick_Sly_Fox_Render.png/revision/latest/scale-to-width-down/350?cb=20160419235513"),
        new Animal ("Jerry", 2, "Elephant", "https://vignette.wikia.nocookie.net/zootopia/images/8/8a/InfoboxJerry.PNG/revision/latest?cb=20161002220507"),
        new Animal ("Doug", 2, "Ram", "https://vignette.wikia.nocookie.net/zootopia/images/4/4e/DougInLab.png/revision/latest/scale-to-width-down/350?cb=20160406215539"),
        new Animal ("Quilda", 2, "Porcupine", "https://vignette.wikia.nocookie.net/zootopia/images/6/6e/Quilda_Infobox.png/revision/latest/scale-to-width-down/350?cb=20160908225036"),
        new Animal ("Cotton", 2, "Rabbit", "https://vignette.wikia.nocookie.net/zootopia/images/3/36/Cotton_Infobox.png/revision/latest/scale-to-width-down/100?cb=20160809230643"),
        new Animal ("Gazelle", 2, "Gazelle", "https://vignette.wikia.nocookie.net/zootopia/images/5/58/Personality-Gazelle.png/revision/latest/scale-to-width-down/100?cb=20161216134845"),
    ];
    this.level5 = [
        new Animal ("Coral", 1, "Fish", "https://vignette.wikia.nocookie.net/disney/images/3/3d/Coral.jpg/revision/latest?cb=20110111024009"),
        new Animal ("Dory", 1, "Fish", "https://vignette.wikia.nocookie.net/disney/images/f/fb/Finding-dory-dory-21275dea-c210-4af8-ad27-55e0e1043fea.jpg/revision/latest/scale-to-width-down/516?cb=20160622063404"),
        new Animal ("Seagulls", 1, "Seagulls", "https://vignette.wikia.nocookie.net/disney/images/9/99/Nemo-Seagulls_.jpg/revision/latest/scale-to-width-down/516?cb=20110913023141"),
        new Animal ("Squirt", 1, "Turtle", "https://vignette.wikia.nocookie.net/disney/images/d/d9/Squirt-FN.png/revision/latest/scale-to-width-down/350?cb=20131111070105")
    ];
  }
  getLevel1 () : Animal[] {
    return this.level1;
  }
  getLevel2 () : Animal[] {
    return this.level2;
  }
  getLevel3 () : Animal[] {
    return this.level3;
  }
  getLevel4 () : Animal[] {
    return this.level4;
  }
  getLevel5 () : Animal[] {
    return this.level5;
  }
}
