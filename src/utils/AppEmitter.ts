import EventEmitter from "events";

export enum EmitterAction {
  // ARTICLE
  SHOW_CREATE_ARTICLE_MODAL = "SHOW_CREATE_ARTICLE_MODAL",
  SHOW_EDIT_ARTICLE_MODAL = "SHOW_EDIT_ARTICLE_MODAL",

  // USER
  SHOW_CREATE_USER_MODAL = "SHOW_CREATE_USER_MODAL",
  SHOW_EDIT_USER_MODAL = "SHOW_EDIT_USER_MODAL",
}

type AppEmitterListener = (value?: string | number) => void;

class AppEmitter {
  private static _instance: AppEmitter;
  private _event: EventEmitter;

  private constructor() {
    this._event = new EventEmitter();
  }

  static get instance(): AppEmitter {
    if (!this._instance) {
      this._instance = new AppEmitter();
    }

    return this._instance;
  }

  publish(action: EmitterAction, value?: string | number) {
    this._event.emit(String(action), value);
  }

  subscribe(action: EmitterAction, listener: AppEmitterListener) {
    this._event.addListener(String(action), listener);
  }

  unsubscribe(action: EmitterAction, listener: AppEmitterListener) {
    this._event.removeListener(String(action), listener);
  }
}

export default AppEmitter;
