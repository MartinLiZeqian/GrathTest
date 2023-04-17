import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { BidLog, CampainLog } from "../generated/CrowFunding/CrowFunding"

export function createBidLogEvent(addr: Address, campaignID: BigInt): BidLog {
  let bidLogEvent = changetype<BidLog>(newMockEvent())

  bidLogEvent.parameters = new Array()

  bidLogEvent.parameters.push(
    new ethereum.EventParam("addr", ethereum.Value.fromAddress(addr))
  )
  bidLogEvent.parameters.push(
    new ethereum.EventParam(
      "campaignID",
      ethereum.Value.fromUnsignedBigInt(campaignID)
    )
  )

  return bidLogEvent
}

export function createCampainLogEvent(
  campainID: BigInt,
  receiver: Address,
  goal: BigInt
): CampainLog {
  let campainLogEvent = changetype<CampainLog>(newMockEvent())

  campainLogEvent.parameters = new Array()

  campainLogEvent.parameters.push(
    new ethereum.EventParam(
      "campainID",
      ethereum.Value.fromUnsignedBigInt(campainID)
    )
  )
  campainLogEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  campainLogEvent.parameters.push(
    new ethereum.EventParam("goal", ethereum.Value.fromUnsignedBigInt(goal))
  )

  return campainLogEvent
}
