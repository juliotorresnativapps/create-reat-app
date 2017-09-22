// Return an array of the selected opion values
// select is an HTML select element
export function getSelectValues(select) {
  const result = [];
  const options = select && select.options;
  let opt;

  for (var i=0, iLen=options.length; i<iLen; i++) {
    opt = options[i];

    if (opt.selected) {
      result.push(opt.value);
    }
  }
  return result;
}
