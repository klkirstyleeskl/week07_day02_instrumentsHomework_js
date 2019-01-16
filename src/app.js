// view for the drop down
const DropDown = require('./views/dropdown_view.js');
const InstrumentFamilyView = require('./views/instrument_family_view.js');
const InstrumentFamilies = require('./models/instrument_families.js');
// data required so not a class
const instrumentFamilyData = require('./data/instrument_family_data.js');


document.addEventListener('DOMContentLoaded', () => {
  // selector for the instrument family, log to see if javascript has run
  console.log('javascript-loaded');

  const selectElement = document.querySelector('select#instrument-families');
  // creating new drop down and bind it to the newly created drop down
  const familyDropDown = new DropDown(selectElement);
  familyDropDown.bindEvents();

  const familyContainer = document.querySelector('div#instrument-family');
  const instrumentFamilyView = new InstrumentFamilyView(familyContainer);
  instrumentFamilyView.bindEvents();

  const instrumentFamilies = new InstrumentFamilies(instrumentFamilyData);
  instrumentFamilies.bindEvents();
});
