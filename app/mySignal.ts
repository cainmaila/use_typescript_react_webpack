import * as signals from 'signals';
export default class MySignal  {
    constructor(){
        MySignal.sig = new signals.Signal();
    };
    static sig:Signal;
}
