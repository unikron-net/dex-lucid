import { Address, Lucid, OutRef, Unit, fromHex, fromUnit, getAddressDetails, toHex } from "@anastasia-labs/lucid-cardano-fork";
import { AddressD, AssetClassD, OutputReferenceD } from "./contract.types";
import { PartialOrderConstants, po } from "./constants";


/**
 * Converts a decimal number to a hexadecimal byte representation.
 * Throws an error if the number is out of byte range (0-255) or not an integer.
 *
 * @param decimal - The decimal number to convert.
 * @returns The hexadecimal byte representation of the decimal number.
 * @throws {Error} If the number is out of byte range (0-255) or not an integer.
 */
export const decimalToHexByte = (decimal: number): string => {
  // Ensure the number is in the range of a byte (0-255)
  if (decimal < 0 || decimal > 255) {
    throw new Error("Number out of byte range (0-255)");
  }
  // Check if decimal is an integer
  if (!Number.isInteger(decimal)) {
    throw new Error("Decimal must be an integer");
  }
  // Convert to hexadecimal and pad with leading zero if necessary
  const hex = decimal.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}

/**
 * Calculates the expected token name based on the given `outRef`.
 * 
 * @param outRef - The OutRef object containing the output index and transaction hash.
 * @returns A Promise that resolves to the calculated hash in hexadecimal format.
 */
export const expectedTokenName = async (outRef: OutRef): Promise<string> => {
  const stringToHash = `${decimalToHexByte(outRef.outputIndex)}${outRef.txHash}`;
  const hashBuffer = await crypto.subtle.digest('SHA-256', fromHex(stringToHash))
  const hashArray = new Uint8Array(hashBuffer);
  const hashHex = toHex(hashArray)
  return hashHex;
}

// `fromAddress` and `toAddress` have been taken from https://github.com/Anastasia-Labs/smart-handles-offchain/blob/19e1ba4f89ebd89b27a7e7a2e3b2aef9686ad955/src/core/utils/utils.ts#L98-L155.

export function fromAddress(address: Address): AddressD {
  // We do not support pointer addresses!

  const { paymentCredential, stakeCredential } = getAddressDetails(address);

  if (!paymentCredential) throw new Error("Not a valid payment address.");

  return {
    paymentCredential:
      paymentCredential?.type === "Key"
        ? {
          PublicKeyCredential: [paymentCredential.hash],
        }
        : { ScriptCredential: [paymentCredential.hash] },
    stakeCredential: stakeCredential
      ? {
        Inline: [
          stakeCredential.type === "Key"
            ? {
              PublicKeyCredential: [stakeCredential.hash],
            }
            : { ScriptCredential: [stakeCredential.hash] },
        ],
      }
      : null,
  };
}

export function toAddress(address: AddressD, lucid: Lucid): Address {
  const paymentCredential = (() => {
    if ("PublicKeyCredential" in address.paymentCredential) {
      return lucid.utils.keyHashToCredential(
        address.paymentCredential.PublicKeyCredential[0]
      );
    } else {
      return lucid.utils.scriptHashToCredential(
        address.paymentCredential.ScriptCredential[0]
      );
    }
  })();
  const stakeCredential = (() => {
    if (!address.stakeCredential) return undefined;
    if ("Inline" in address.stakeCredential) {
      if ("PublicKeyCredential" in address.stakeCredential.Inline[0]) {
        return lucid.utils.keyHashToCredential(
          address.stakeCredential.Inline[0].PublicKeyCredential[0]
        );
      } else {
        return lucid.utils.scriptHashToCredential(
          address.stakeCredential.Inline[0].ScriptCredential[0]
        );
      }
    } else {
      return undefined;
    }
  })();
  return lucid.utils.credentialToAddress(paymentCredential, stakeCredential);
}

export function fromOutRef(outRef: OutRef): OutputReferenceD {
  return {
    txHash: { hash: outRef.txHash },
    outputIndex: BigInt(outRef.outputIndex),
  };
}

export function assetClassDFromUnit(unit: Unit): AssetClassD {
  const { policyId, assetName } = fromUnit(unit)
  return {
    symbol: policyId,
    name: assetName ?? "",
  }
}

/**
 * Resolves the PartialOrderConstants based on the provided Lucid network.
 * @param lucid - The Lucid object containing the network information.
 * @returns The PartialOrderConstants object corresponding to the Lucid network.
 * @throws {Error} If the Lucid network is unsupported.
 */
export function resolvePOConstants(lucid: Lucid): PartialOrderConstants {
  const nid = lucid.network
  if (nid === 'Mainnet') {
    return po.mainnet
  } else if (nid === 'Preprod') {
    return po.preprod
  } else {
    throw new Error(`Unsupported network: ${nid}`)
  }
}