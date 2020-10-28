namespace Event {
//% block="onEvent"
export function onEvent(handler: () => void) {
   control.inBackground(function () {
       while(true) {
           if (input.buttonIsPressed(Button.A)) { handler (); }
           basic.pause(20);
       }
   })
}
}
