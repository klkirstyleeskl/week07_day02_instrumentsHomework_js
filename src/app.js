
const DropDown = require('./views/dropdown_view.js');
const InstrumentFamilies = require('./models/instrument_families.js');
const FamilyData = require('./data/instrument_family_data.js');

  document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const instrumentFamilies = new InstrumentFamilies(FamilyData);
  instrumentFamilies.bindEvents();


  const dropDown = new DropDown();
  dropDown.bindEvents();

});
