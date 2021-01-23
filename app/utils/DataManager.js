export const formatDataForSectionList = (contacts) => {
  let result = [];
  let asciiOfA = 'A'.charCodeAt(0);
  for (let i = 0; i < 26; i++) {
    let curr = String.fromCharCode(asciiOfA + i);
    let object = {
      title: curr,
    };

    let currSection = contacts.filter((item) => {
      return item.givenName[0].toUpperCase() === curr;
    });
    if (currSection.length > 0) {
      currSection.sort((a, b) => a.givenName.localeCompare(b.givenName));
      object.data = currSection;
      result.push(object);
    }
  }
  return result;
};
