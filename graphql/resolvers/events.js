const Event = require("../../models/event");
const User = require("../../models/user");
const _ = require("lodash");
const { transformEvent } = require("./merge");
module.exports = {
  events: async () => {
    try {
      const events = await Event.find();
      return events.map((event) => {
        return transformEvent(event);
      });
    } catch (err) {
      throw err;
    }
  },
  createEvent: async (args, req) => {
    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    const QuoteDate = new Date().toLocaleDateString();
    const rebate = random(15, 20);
    const originalTitleQuote = Math.ceil(+args.eventInput.purchaseAmount / 126);
    const rebateSavings = Math.ceil((originalTitleQuote / 100) * rebate);
    const radianQuote = _.round(originalTitleQuote - rebateSavings);
    const BuyerResponsibility = _.round(radianQuote * 0.9);
    const sellerResponsibility = _.round(radianQuote - BuyerResponsibility);
    const SOTI = 0;
    const SLTI = 0;
    const SBR = 0;
    const STPremium = SOTI + SLTI + SBR;
    const SAE906 = 0;
    const SAE8106 = 0;
    const STEndorsements = SAE906 + SAE8106;
    const SCF = sellerResponsibility;
    const SSF = 0;
    const STSettlementCharges = SCF + SSF;
    const STitleCharges = STPremium + STEndorsements + STSettlementCharges;
    const BCF = _.round(sellerResponsibility, 2);
    const BSF = _.round(Math.floor(BuyerResponsibility * 0.1));
    const BTSettlementCharges = _.round(BCF + BSF);
    const BAE906 = _.round(Math.floor(BuyerResponsibility * 0.09));
    const BAE8106 = _.round(Math.floor(BuyerResponsibility * 0.01));
    const BTEndorsements = _.round(BAE906 + BAE8106);
    const BLTI = _.round(BAE8106);
    const BBR = _.round(rebateSavings);
    const BOTI = _.round(
      BuyerResponsibility + BBR - BLTI - BTEndorsements - BTSettlementCharges
    );
    const BTPremium = _.round(BOTI + BLTI - BBR);
    const BTitleCharges = _.round(
      BTPremium + BTEndorsements + BTSettlementCharges
    );
    const TOTI = SOTI + BOTI;
    const TLTI = SLTI + BLTI;
    const TBR = SBR + BBR;
    const TTPremium = STPremium + BTPremium;
    const TAE906 = SAE906 + BAE906;
    const TAE8106 = SAE8106 + BAE8106;
    const TTEndorsements = STEndorsements + BTEndorsements;
    const TCF = SCF + BCF;
    const TSF = SSF + BSF;
    const TTSettlementCharges = STSettlementCharges + BTSettlementCharges;
    const TTitleCharges = STitleCharges + BTitleCharges;
    const BDST = 0;
    const BMST =
      (+args.eventInput.purchaseAmount - +args.eventInput.loanAmount) * 0.0105;
    const BMIT =
      (+args.eventInput.purchaseAmount - +args.eventInput.loanAmount) * 0.006;
    const BMRF = BAE906;
    const BDRF = BLTI;
    const BTTOGF = BDST + BMST + BMIT + BMRF + BDRF;
    const SDST = BuyerResponsibility - 100;
    const SMST = 0;
    const SMIT = 0;
    const SMRF = 0;
    const SDRF = 0;
    const STTOGF = SDST + SMST + SMIT + SMRF + SDRF;
    const TDST = BDST + SDST;
    const TMST = BMST + SMST;
    const TMIT = BMIT + SMIT;
    const TMRF = BMRF + SMRF;
    const TDRF = BDRF + SDRF;
    const TTTOGF = BTTOGF + STTOGF;
    let creator1="619528dcee96fafa7dd0fd9d";
    if (req.isAuth) {
      creator1=req.userId;
    }
    const event = new Event({
      address: args.eventInput.address,
      purchaseAmount: +args.eventInput.purchaseAmount,
      loanAmount: +args.eventInput.loanAmount,
      QuoteDate: QuoteDate,
      rebate: rebate,
      originalTitleQuote: originalTitleQuote,
      rebateSavings: rebateSavings,
      radianQuote: radianQuote,
      BuyerResponsibility: BuyerResponsibility,
      sellerResponsibility: sellerResponsibility,
      SOTI: SOTI,
      SLTI: SLTI,
      SBR: SBR,
      STPremium: STPremium,
      SAE906: SAE906,
      SAE8106: SAE8106,
      STEndorsements: STEndorsements,
      SCF: SCF,
      SSF: SSF,
      STSettlementCharges: STSettlementCharges,
      STitleCharges: STitleCharges,
      BCF: BCF,
      BSF: BSF,
      BTSettlementCharges: BTSettlementCharges,
      BAE906: BAE906,
      BAE8106: BAE8106,
      BTEndorsements: BTEndorsements,
      BLTI: BLTI,
      BBR: BBR,
      BOTI: BOTI,
      BTPremium: BTPremium,
      BTitleCharges: BTitleCharges,
      TOTI: TOTI,
      TLTI: TLTI,
      TBR: TBR,
      TTPremium: TTPremium,
      TAE906: TAE906,
      TAE8106: TAE8106,
      TTEndorsements: TTEndorsements,
      TCF: TCF,
      TSF: TSF,
      TTSettlementCharges: TTSettlementCharges,
      TTitleCharges: TTitleCharges,
      BDST: BDST,
      BMST: BMST,
      BMIT: BMIT,
      BMRF: BMRF,
      BDRF: BDRF,
      BTTOGF: BTTOGF,
      SDST: SDST,
      SMST: SMST,
      SMIT: SMIT,
      SMRF: SMRF,
      SDRF: SDRF,
      STTOGF: STTOGF,
      TDST: TDST,
      TMST: TMST,
      TMIT: TMIT,
      TMRF: TMRF,
      TDRF: TDRF,
      TTTOGF: TTTOGF,
      creator: creator1
    });
    let createdEvent;
    try {
      const result = await event.save();
      createdEvent = transformEvent(result);
      const creator = await User.findById(creator1);

      if (!creator) {
        throw new Error("User not found.");
      }
      creator.createdEvents.push(event);
      await creator.save();

      return createdEvent;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};