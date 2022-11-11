import {makeAutoObservable} from 'mobx';

class PlayStore {
  counter = 3;

  play = false;

  constructor() {
    makeAutoObservable(this, {}, {autoBind: true})
  }

  setCounter(value: number) {
    this.counter = value;
  }

  setPlay(value: boolean) {
    this.play = value;
  }
}

export default new PlayStore();
