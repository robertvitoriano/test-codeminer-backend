const request = require("supertest");
const app = require('../src/app')

test('should register a survivor', async()=>{

    await request(app).post("/survivors").send({
      name: "Robert  Silva Vitoriano",
      age: 22,
      gender: "M",
      lastLocation:'50.05,60.06',
      ak:100,
      water:100,
      soup:100,
      aid:100
    }).expect(201)

})

test("make a trade", async () => {
  await request(app)
    .post("/survivor/5f401513b659e32620aae2a4/trade")
    .set("user", "5f3ffe38673c164ba4977c66")
    .send({
      akQuantityToPay: 0,
      aidQuantityToPay: 2,
      soupQuantityToPay: 0,
      waterQuantityToPay: 0,

      akQuantityToPick: 1,
      aidQuantityToPick: 0,
      soupQuantityToPick: 1,
      waterQuantityToPick: 0,
    })
    .expect(200);
});