import fs from "fs";
import faqGenerator from "./faqGenerator";

jest.mock("fs", () => ({
  readdirSync: jest.fn(),
  readFileSync: jest.fn(),
}));

const matterData = {
  title: "Hello World",
  date: "11/30/2022",
};

jest.mock("gray-matter", () =>
  jest.fn().mockImplementation(() => ({
    data: matterData,
  })),
);

describe("faqGenerator", () => {
  it("should return the FAQs list", () => {
    fs.readdirSync.mockImplementationOnce(() => ["hello-world.mdx"]);

    const { getFAQs } = faqGenerator();
    const faq = getFAQs();
    expect(faq).toHaveLength(1);
    expect(faq[0].title).toEqual(matterData.title);
    expect(faq[0].date).toEqual(matterData.date);
  });

  it("should return null when no faq post found", () => {
    fs.readdirSync.mockImplementationOnce(() => []);

    const { getFAQs } = faqGenerator();
    const faq = getFAQs();
    expect(faq).toBeNull();
  });
});
