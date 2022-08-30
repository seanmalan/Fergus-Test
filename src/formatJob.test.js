const { formatJob } = require("./formatJob");

const mongooseJob = {
  _id: "61679189b54f48aa6588a7fd",
  job: "Build a fence",
  clientName: "Joe Blogg",
  clientPhoneNumber: 21345456,
  jobAddress: "123 Fake street",
  description:
    "Build a fence and replace the retaining wall as it is falling apart",
  jobStatus: "active",
};

describe("FormatJob", () => {
  test("Should format the job listing from Mongoose", () => {
    const expectedBody = {
      id: "61679189b54f48aa6588a7fd",
      job: "Build a fence",
      clientName: "Joe Blogg",
      clientPhoneNumber: 21345456,
      jobAddress: "123 Fake street",
      description:
        "Build a fence and replace the retaining wall as it is falling apart",
      jobStatus: "active",
    };

    const received = formatJob(mongooseJob);
    expect(expectedBody).toEqual(received);
  });
});
