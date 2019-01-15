const PubSub = require('../helpers/pub_sub.js');

const DropDown = function(element){
  this.element = element;
};

DropDown.prototype.bindEvents = function(){
  PubSub.subscribe('Instuments:all-instruments-ready', (evt) => {
    const allinstruments = evt.detail;
    this.populate(allinstruments);
  });

  this.element.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('SelectView:change', selectedIndex);
  });
};

DropDown.prototype.populate = function(instrumentData){
  instrumentData.forEach((instrument, index) => {
    const option = document.createElement('option');
    option.value = index;
    this.element.appendChild(option);
  });
}
