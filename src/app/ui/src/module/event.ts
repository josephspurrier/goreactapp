/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const EventEmitter = {
  events: {},
  dispatch: function (event: string, data: any): void {
    if (!this.events[event]) return;
    this.events[event].forEach((callback: (arg0: any) => any) =>
      callback(data)
    );
  },
  subscribe: function (event: string, callback: any): void {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(callback);
  },
};

//module.exports = { EventEmitter };
export default EventEmitter;
