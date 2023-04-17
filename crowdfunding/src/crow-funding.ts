import {
  BidLog as BidLogEvent,
  CampainLog as CampainLogEvent
} from "../generated/CrowFunding/CrowFunding"
import { BidLog, CampainLog } from "../generated/schema"

export function handleBidLog(event: BidLogEvent): void {
  let entity = new BidLog(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.addr = event.params.addr
  entity.campaignID = event.params.campaignID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCampainLog(event: CampainLogEvent): void {
  let entity = new CampainLog(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.campainID = event.params.campainID
  entity.receiver = event.params.receiver
  entity.goal = event.params.goal

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
