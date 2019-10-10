import { Subject, Observer, Pool } from "./rxvuex";

declare const RxVuex :{
    Subject : typeof Subject
    Observer : typeof Observer
    Pool: typeof Pool
}


export default RxVuex;
