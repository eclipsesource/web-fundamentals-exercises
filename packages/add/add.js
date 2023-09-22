const _ = require("lodash");
const { hasId } = require("has-id");
const { isNumeric } = require("is-numeric");

/**
 * This class models parsed unstructured data. We are only interested in data which has
 * an 'id' and associated numeric value so we offer a convenience function for it. If an
 * 'id' is associated multiple times with the a numeric value, we are interest in the last
 * one.
 */
class Data {
  constructor() {
    this.parsedData = [
      {
        value: 50,
      },
      {
        id: 0,
        value: 10,
      },
      {
        id: "0",
        value: 5,
      },
      null,
      null,
      {
        id: "x10",
        value: 31,
      },
      {
        id: "foo",
        value: 2,
      },
      {
        id: "foo",
        value: 1,
      },
      {
        id: "foo",
        value: false,
      },
      null,
    ];
    this.getNumericValue = this.getNumericValue.bind(this);
  }

  getNumericValue(id) {
    const entry = _.findLast(this.parsedData, (entry) => {
      return hasId(entry) && isNumeric(entry.value) && entry.id === id;
    });
    if (entry) {
      return entry.value;
    }
    return undefined;
  }
}

const add = (...ids) => {
  const data = new Data();
  const values = ids
    .map(data.getNumericValue)
    .filter((value) => value !== undefined);
  return _.sum(values);
};

module.exports = add;
