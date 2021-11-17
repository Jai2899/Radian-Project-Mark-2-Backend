const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type Event {
    _id: ID!
    address: String!
    purchaseAmount: Float!
    loanAmount: Float!
    QuoteDate: String!
    rebate: Float!
    originalTitleQuote: Float!
    rebateSavings: Float!
    radianQuote: Float!
    BuyerResponsibility: Float!
    sellerResponsibility: Float!
    SOTI: Float!
    SLTI: Float!
    SBR: Float!
    STPremium: Float!
    SAE906: Float!
    SAE8106: Float!
    STEndorsements: Float!
    SCF: Float!
    SSF: Float!
    STSettlementCharges: Float!
    STitleCharges: Float!
    BCF: Float!
    BSF: Float!
    BTSettlementCharges: Float!
    BAE906: Float!
    BAE8106: Float!
    BTEndorsements: Float!
    BLTI: Float!
    BBR: Float!
    BOTI: Float!
    BTPremium: Float!
    BTitleCharges: Float!
    TOTI: Float!
    TLTI: Float!
    TBR: Float!
    TTPremium: Float!
    TAE906: Float!
    TAE8106: Float!
    TTEndorsements: Float!
    TCF: Float!
    TSF: Float!
    TTSettlementCharges: Float!
    TTitleCharges: Float!
    BDST: Float!
    BMST: Float!
    BMIT: Float!
    BMRF: Float!
    BDRF: Float!
    BTTOGF: Float!
    SDST: Float!
    SMST: Float!
    SMIT: Float!
    SMRF: Float!
    SDRF: Float!
    STTOGF: Float!
    TDST: Float!
    TMST: Float!
    TMIT: Float!
    TMRF: Float!
    TDRF: Float!
    TTTOGF: Float!
    creator: User!
  }

type User {
  _id: ID!
  email: String!
  password: String
  createdEvents: [Event!]
}

type AuthData{
  userId: ID!
  token: String!
  tokenExpiration: Int!
}

input EventInput {
  address: String!
  purchaseAmount: Float!
  loanAmount: Float!
  QuoteDate: String
  rebate: Float
  originalTitleQuote: Float
  rebateSavings: Float
  radianQuote: Float
  BuyerResponsibility: Float
  sellerResponsibility: Float
  SOTI: Float
  SLTI: Float
  SBR: Float
  STPremium: Float
  SAE906: Float
  SAE8106: Float
  STEndorsements: Float
  SCF: Float
  SSF: Float
  STSettlementCharges: Float
  STitleCharges: Float
  BCF: Float
  BSF: Float
  BTSettlementCharges: Float
  BAE906: Float
  BAE8106: Float
  BTEndorsements: Float
  BLTI: Float
  BBR: Float
  BOTI: Float
  BTPremium: Float
  BTitleCharges: Float
  TOTI: Float
  TLTI: Float
  TBR: Float
  TTPremium: Float
  TAE906: Float
  TAE8106: Float
  TTEndorsements: Float
  TCF: Float
  TSF: Float
  TTSettlementCharges: Float
  TTitleCharges: Float
  BDST: Float
  BMST: Float
  BMIT: Float
  BMRF: Float
  BDRF: Float
  BTTOGF: Float
  SDST: Float
  SMST: Float
  SMIT: Float
  SMRF: Float
  SDRF: Float
  STTOGF: Float
  TDST: Float
  TMST: Float
  TMIT: Float
  TMRF: Float
  TDRF: Float
  TTTOGF: Float
}

input UserInput {
  email: String!
  password: String!
}

type RootQuery {
    events: [Event!]!
    login(email: String!, password: String!): AuthData!
}

type RootMutation {
    createEvent(eventInput: EventInput): Event
    createUser(userInput: UserInput): User
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);
