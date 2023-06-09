import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { BidLog } from "../generated/schema"
import { BidLog as BidLogEvent } from "../generated/CrowFunding/CrowFunding"
import { handleBidLog } from "../src/crow-funding"
import { createBidLogEvent } from "./crow-funding-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let addr = Address.fromString("0x0000000000000000000000000000000000000001")
    let campaignID = BigInt.fromI32(234)
    let newBidLogEvent = createBidLogEvent(addr, campaignID)
    handleBidLog(newBidLogEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("BidLog created and stored", () => {
    assert.entityCount("BidLog", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "BidLog",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "addr",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "BidLog",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "campaignID",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
