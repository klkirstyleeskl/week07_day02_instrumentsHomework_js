const PubSub = require('../helpers/pub_sub.js')

const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:change', (evt) => {
     const selectedIndex = evt.detail;
     console.log(selectedIndex);
     const instrumentResult = this.publishInstrumentDetail(selectedIndex);
     console.log(instrumentResult);
     PubSub.publish('instrument:selected-instrument-ready', instrumentResult);
   });
};


InstrumentFamilies.prototype.getInstrument = function (index) {
    return this.planets[index];
};



module.exports = InstrumentFamilies;
