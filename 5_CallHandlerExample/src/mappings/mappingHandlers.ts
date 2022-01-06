import {SubstrateExtrinsic} from "@subql/types";
import {StarterEntity} from "../types";

export async function handleCall(extrinsic: SubstrateExtrinsic): Promise<void> {
    let record = new StarterEntity(extrinsic.block.block.header.hash.toString());
    //const record = await StarterEntity.get(extrinsic.block.block.header.hash.toString());
    //Date type timestamp
    record.field4 = extrinsic.block.timestamp;
    //Boolean tyep
    record.field5 = true;
    logger.info('\nBLOCK NUMBER: ' + extrinsic.block.block.header.number.toNumber() + 
    '\nERA: ' + extrinsic.extrinsic.era + 
    '\nSIGNED: ' + extrinsic.extrinsic.isSigned + 
    '\nSIGNER: ' + extrinsic.extrinsic.signer);
    await record.save();
}


