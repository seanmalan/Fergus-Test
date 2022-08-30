const request = require("supertest");
const app = require("./app");

describe("GET route", () => {
  test("Should get the first mock job posting", async () => {
    const expectedBody = [
      {
        id: "61679189b54f48aa6588a7fd",
        job: "Build a fence",
        clientName: "Joe Blogg",
        clientPhoneNumber: 21345456,
        jobAddress: "123 Fake street",
        description:
          "Build a fence and replace the retaining wall as it is falling apart",
        jobStatus: "boomerang",
      },
      {
        id: "630c5aadd51c5dc2b4b1bfed",
        job: "Build a deck",
        clientName: "Joe Blogg",
        clientPhoneNumber: 21345456,
        jobAddress: "123 Fake street",
        description:
          "Build a fence and replace the retaining wall as it is falling apart",
        jobStatus: "scheduled",
        jobNotes: ["we need a deck that is 100mm high"],
        createdDate: "2023-11-17T00:00:00.000Z",
      },
    ];

    const expectedStatus = 200;

    await request(app)
      .get("/jobs")
      .expect(expectedStatus)
      .expect((response) => {
        expect(response.body).toEqual(expectedBody);
      });
  });

  test("Should retrieve a single job reservation by id", async () => {
    const expectedBody = {
      id: "630c5aadd51c5dc2b4b1bfed",
      job: "Build a deck",
      clientName: "Joe Blogg",
      clientPhoneNumber: 21345456,
      jobAddress: "123 Fake street",
      description:
        "Build a fence and replace the retaining wall as it is falling apart",
      jobStatus: "scheduled",
      jobNotes: "we need a deck that is 100mm high",
      createdDate: "2023-11-17T00:00:00.000Z",
    };

    const expectedStatus = 200;

    await request(app)
      .get("/jobs/630c5aadd51c5dc2b4b1bfed")
      .expect(expectedStatus)
      .expect((response) => {
        expect(response.body).toEqual(expectedBody);
      });
  });
});

describe("POST", () => {
  test("Should send a new job to the database", async () => {
    const body = {
      job: "Build a trellis",
      clientName: "Joe Blogg",
      clientPhoneNumber: 21345456,
      jobAddress: "123 Fake street",
      description:
        "Build a fence and replace the retaining wall as it is falling apart",
      jobStatus: "active",
      jobNotes: ["we need a new trellis"],
    };

    const expectedStatus = 200;

    await request(app).post("/jobs").send(body).expect(expectedStatus);
  });
});
