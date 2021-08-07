let picker;
let color = '#ffffff';
const defaults = {
  color: color,
  container: document.getElementById('color_picker'),
  onChange: function(color) {
    updateColor(color);
  },
  swatchColors: ['#D1BF91', '#60371E', '#A6341B', '#F9C743', '#C7C8C4'],
};

function initPicker(options) {
  options = Object.assign(defaults, options);
  picker = new EasyLogicColorPicker(options);
}

function updateColor(value) {
  color = value;
  const $color = document.querySelector('.sample__color');
  const $code = document.querySelector('.sample__code');
  $code.innerText = color;
  $color.style.setProperty('--color', color);
}

function updatePattle() {
  if(defaults.swatchColors.indexOf(color)<0){
    defaults.swatchColors.unshift(color);
    defaults.swatchColors.pop(-1);
    picker.destroy();
    picker = new EasyLogicColorPicker(Object.assign(defaults));
    return defaults.swatchColors;
  }
}

function deleteSelectedColor() {
  console.log(color);
  if(defaults.swatchColors.indexOf(color)>0){
    removeElementOfArray(defaults.swatchColors, color);
    picker.destroy();
    picker = new EasyLogicColorPicker(Object.assign(defaults));
  }
}

function removeElementOfArray(arr, valueRemove){
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === valueRemove){
      arr.splice(i, 1); 
      i--; 
    }
  }
  return arr;
}

function onChangeType(e) {
  picker.setType(e.value);
}

window.onload = function() {
  initPicker();
  updateColor(color);
};