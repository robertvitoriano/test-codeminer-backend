const SurvivorModel = require("./../models/survior");

module.exports = {
  async registerSurvivor(req, res) {
    const { name, age, gender, lastLocation, ak, aid, soup, water } = req.body;

    try {
      if (await SurvivorModel.findOne({ name }))
        //se encontrar um email o cadastro não será realizado
        return res.status(400).send({ error: "Name already in use" });

      const user = await SurvivorModel.create({
        name,
        age,
        gender,
        lastLocation,
        ak,
        aid,
        soup,
        water,
      });

      return res.send({ user });
    } catch {}
  },

  async tradeItems(req, res) {
    const { user } = req.headers; //pega o usuario logado.
    const { survivorId } = req.params; //pega o usuario selecionado e não logado.

    const {
      akQuantityToPay,
      aidQuantityToPay,
      soupQuantityToPay,
      waterQuantityToPay,
      akQuantityToPick,
      aidQuantityToPick,
      soupQuantityToPick,
      waterQuantityToPick,
    } = req.body;

    const userTotalPoints =
      akQuantityToPay * 8 +
      aidQuantityToPay * 10 +
      soupQuantityToPay * 12 +
      waterQuantityToPay * 14;

    const survivorTotalPoints =
      akQuantityToPick * 8 +
      aidQuantityToPick * 10 +
      soupQuantityToPick * 12 +
      waterQuantityToPick * 14;

    if (userTotalPoints === survivorTotalPoints) {
      const User = await SurvivorModel.findById(user);
      const Survivor = await SurvivorModel.findById(survivorId);

      const finalQuantityUserAk = await (parseInt(User.ak) - parseInt(akQuantityToPay));

      if (finalQuantityUserAk) {

        const finalQuantitySurvivorAk = await (parseInt(Survivor.ak) + parseInt(akQuantityToPay));

        await SurvivorModel.findByIdAndUpdate(
          req.params.survivorId,
          { ak: finalQuantitySurvivorAk },
          { new: true }
        );
      }

      await SurvivorModel.findByIdAndUpdate(
        req.headers.user,
        { ak: finalQuantityUserAk },
        { new: true }
      );

      const finalQuantityUserAid = await (parseInt(User.aid) - parseInt(aidQuantityToPay));

      if (finalQuantityUserAid) {

        const finalQuantitySurvivorAid = await (parseInt(Survivor.aid) + parseInt(aidQuantityToPay));

        await SurvivorModel.findByIdAndUpdate(
          req.params.survivorId,
          { aid: finalQuantitySurvivorAid },
          { new: true }
        );
      }

      await SurvivorModel.findByIdAndUpdate(
        req.headers.user,
        { aid: finalQuantityUserAid },
        { new: true }
      );

      const finalQuantityUserSoup = await (parseInt(User.soup) - parseInt(soupQuantityToPay));

      if (finalQuantityUserSoup) {

        const finalQuantitySurvivorSoup = await (parseInt(Survivor.soup) + parseInt(soupQuantityToPay));
          
        await SurvivorModel.findByIdAndUpdate(
          req.params.survivorId,
          { soup: finalQuantitySurvivorSoup },
          { new: true }
        );
      }

      await SurvivorModel.findByIdAndUpdate(
        req.headers.user,
        { soup: finalQuantityUserSoup },
        { new: true }
      );

      const finalQuantityUserWater = await (parseInt(User.water) - parseInt(waterQuantityToPay));

      if (finalQuantityUserWater) {
        const finalQuantitySurvivorWater = parseInt(Survivor.water) + parseInt(waterQuantityToPay);

        await SurvivorModel.findByIdAndUpdate(
          req.params.survivorId,
          { water: finalQuantitySurvivorWater },
          { new: true }
        );
      }
      
      await SurvivorModel.findByIdAndUpdate(
        req.headers.user,
        { water: finalQuantityUserWater },
        { new: true }
      );
    }

//****************************************************************************Second Verification************************************************ */
      
    if (userTotalPoints === survivorTotalPoints) {

      const User = await SurvivorModel.findById(user); 
      const Survivor = await SurvivorModel.findById(survivorId); 

      const quantityUserPickAk = await (parseInt(User.ak) + parseInt(akQuantityToPick)); 
      
      if (quantityUserPickAk) {
        const quantitySurivivorPickAk = await (parseInt(Survivor.ak) -  parseInt(akQuantityToPick)); 
        await SurvivorModel.findByIdAndUpdate(
          req.params.survivorId,
          { ak: quantitySurivivorPickAk },
          { new: true }
        );
      }
      await SurvivorModel.findByIdAndUpdate(
        req.headers.user,
        { ak: quantityUserPickAk },
        { new: true }
      );

      const quantityUserPickAid = await (parseInt(User.aid) + parseInt(aidQuantityToPick));

      if (quantityUserPickAid) {
        const quantitySurvivorPickAid = await (parseInt(Survivor.aid) - parseInt(aidQuantityToPick)); 

        await SurvivorModel.findByIdAndUpdate(
          req.params.survivorId,
          { aid: quantitySurvivorPickAid },
          { new: true }
        );
      }
      await SurvivorModel.findByIdAndUpdate(
        req.headers.user,
        { aid: quantityUserPickAid },
        { new: true }
      );

      const quantityUserPickSoup = await (parseInt(User.soup) + parseInt(soupQuantityToPick));

      if (quantityUserPickSoup) {

        const quantitySurvivorPickSoup = parseInt(Survivor.soup) - parseInt(soupQuantityToPick);

        await SurvivorModel.findByIdAndUpdate(
          req.params.survivorId,
          { soup: quantitySurvivorPickSoup },
          { new: true }
        );

      }
      
      await SurvivorModel.findByIdAndUpdate(
        req.headers.user,
        { soup: quantityUserPickSoup },
        { new: true }
      );

      const quantityUserPickWater = await (parseInt(User.water) + parseInt(waterQuantityToPick));

      if (quantityUserPickWater) {

        const quantitySurvivorPick= await (parseInt(Survivor.water) -parseInt(waterQuantityToPick)); 

        await SurvivorModel.findByIdAndUpdate(
               req.params.survivorId,
               { water: quantitySurvivorPick},
               { new: true }
             );
            }

      await SurvivorModel.findByIdAndUpdate(
              req.headers.user,
              { water: quantityUserPickWater },
              { new: true }
            );

      return res.json({ ok: true });
    }
  },

  reportInfection(req, res) {},

  async getAllSurvivors(req, res) {
    const Gra = await SurvivorModel.find().sort({ createdAt: -1 });
    return res.json(Gra);
  },
  getSurvivorById(req, res) {
    res.send({ message: "all survivors" });
  },

  updateSurvivorLocation(req, res) {},
};
