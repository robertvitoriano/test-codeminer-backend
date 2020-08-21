const request = require("supertest");
const app = require("../src/app");

test("should register a survivor", async () => {
  await request(app)
    .get("/reports/noninfected")
    .send()
    .expect(200);
});

test("should register a survivor", async () => {
  await request(app)
    .get("/reports/infected")
    .send()
    .expect(200);
});

test("should send average of each item per user", async () => {
  await request(app)
        .get("/reports/items")
        .send()
        .expect(200);
});