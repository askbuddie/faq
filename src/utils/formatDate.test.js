import formatDate from "./formatDate";

describe("formatDate", () => {
  it("should parse mmddyy and return the date in correct format", () => {
    const mmddyy = formatDate("11/30/2022");

    expect(mmddyy.monthAndDay).toEqual("Nov 30");
    expect(mmddyy.year).toEqual("2022");
  });

  it("should parse yymmdd and return the date in correct format", () => {
    const yymmdd = formatDate("2022/11/30");

    expect(yymmdd.monthAndDay).toEqual("Nov 30");
    expect(yymmdd.year).toEqual("2022");
  });

  it("should parse mmNameddyy and return the date in correct format", () => {
    const mmNameddyy = formatDate("Nov 30, 2022");

    expect(mmNameddyy.monthAndDay).toEqual("Nov 30");
    expect(mmNameddyy.year).toEqual("2022");
  });
});
