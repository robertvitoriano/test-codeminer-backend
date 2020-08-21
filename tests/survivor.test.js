const request = require("supertest");
const app = require('../src/app')

test('should register a survivor', async()=>{

    await request(app).post("/survivors").send({
      name: "Rob",
      age: 22,
      gender: "M",
      lastLocation:'50.05,60.06',
      ak:100,
      water:100,
      soup:100,
      aid:100
    }).expect(201)

})

test("get all survivors data", async () => {
  await request(app)
    .get("/survivors")
    .send()
    .expect(200);
});



