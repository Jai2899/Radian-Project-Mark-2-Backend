const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  address: {
    type: String,
    required: true,
  },
  purchaseAmount: {
    type: Number,
    required: true,
  },
  loanAmount: {
    type: Number,
    required: true,
  },
  QuoteDate: {
    type: String,
    required: true,
  },
  rebate: {
    type: Number,
    required: true,
  },
  originalTitleQuote: {
    type: Number,
    required: true,
  },
  rebateSavings:  {
    type: Number,
    required: true,
  },
  radianQuote: {
    type: Number,
    required: true,
  },
  BuyerResponsibility: {
    type: Number,
    required: true,
  },
  sellerResponsibility: {
    type: Number,
    required: true,
  },
  SOTI: {
    type: Number,
    required: true,
  },
  SLTI: {
    type: Number,
    required: true,
  },
  SBR: {
    type: Number,
    required: true,
  },
  STPremium: {
    type: Number,
    required: true,
  },
  SAE906: {
    type: Number,
    required: true,
  },
  SAE8106: {
    type: Number,
    required: true,
  },
  STEndorsements: {
    type: Number,
    required: true,
  },
  SCF: {
    type: Number,
    required: true,
  },
  SSF: {
    type: Number,
    required: true,
  },
  STSettlementCharges: {
    type: Number,
    required: true,
  },
  STitleCharges: {
    type: Number,
    required: true,
  },
  BCF: {
    type: Number,
    required: true,
  },
  BSF: {
    type: Number,
    required: true,
  },
  BTSettlementCharges: {
    type: Number,
    required: true,
  },
  BAE906: {
    type: Number,
    required: true,
  },
  BAE8106: {
    type: Number,
    required: true,
  },
  BTEndorsements: {
    type: Number,
    required: true,
  },
  BLTI: {
    type: Number,
    required: true,
  },
  BBR: {
    type: Number,
    required: true,
  },
  BOTI: {
    type: Number,
    required: true,
  },
  BTPremium: {
    type: Number,
    required: true,
  },
  BTitleCharges: {
    type: Number,
    required: true,
  },
  TOTI: {
    type: Number,
    required: true,
  },
  TLTI: {
    type: Number,
    required: true,
  },
  TBR: {
    type: Number,
    required: true,
  },
  TTPremium: {
    type: Number,
    required: true,
  },
  TAE906: {
    type: Number,
    required: true,
  },
  TAE8106: {
    type: Number,
    required: true,
  },
  TTEndorsements: {
    type: Number,
    required: true,
  },
  TCF: {
    type: Number,
    required: true,
  },
  TSF: {
    type: Number,
    required: true,
  },
  TTSettlementCharges: {
    type: Number,
    required: true,
  },
  TTitleCharges: {
    type: Number,
    required: true,
  },
  BDST: {
    type: Number,
    required: true,
  },
  BMST: {
    type: Number,
    required: true,
  },
  BMIT: {
    type: Number,
    required: true,
  },
  BMRF: {
    type: Number,
    required: true,
  },
  BDRF: {
    type: Number,
    required: true,
  },
  BTTOGF: {
    type: Number,
    required: true,
  },
  SDST: {
    type: Number,
    required: true,
  },
  SMST: {
    type: Number,
    required: true,
  },
  SMIT: {
    type: Number,
    required: true,
  },
  SMRF: {
    type: Number,
    required: true,
  },
  SDRF: {
    type: Number,
    required: true,
  },
  STTOGF: {
    type: Number,
    required: true,
  },
  TDST: {
    type: Number,
    required: true,
  },
  TMST: {
    type: Number,
    required: true,
  },
  TMIT: {
    type: Number,
    required: true,
  },
  TMRF: {
    type: Number,
    required: true,
  },
  TDRF: {
    type: Number,
    required: true,
  },
  TTTOGF: {
    type: Number,
    required: true,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Event", eventSchema);
