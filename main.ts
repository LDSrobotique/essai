namespace Event {
//% block="onEvent"
export function onEvent(handler: () => void) {
   control.inBackground(function () {
       while(true) {
           if (true) { handler (); }
           basic.pause(100);
       }
   })
}
}