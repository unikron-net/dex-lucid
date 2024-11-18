import * as _lucid_evolution_lucid from '@lucid-evolution/lucid';
import { Data, Address, Unit, UTxO, Credential, PolicyId, Assets, LucidEvolution, TxBuilder, UnixTime, OutRef } from '@lucid-evolution/lucid';

declare const OutputReferenceSchema: _lucid_evolution_lucid.TObject<{
    txHash: _lucid_evolution_lucid.TObject<{
        hash: _lucid_evolution_lucid.TUnsafe<string>;
    }>;
    outputIndex: _lucid_evolution_lucid.TUnsafe<bigint>;
}>;
type OutputReferenceD = Data.Static<typeof OutputReferenceSchema>;
declare const OutputReferenceD: OutputReferenceD;
declare const PONftPolicyRedeemerSchema: _lucid_evolution_lucid.TUnsafe<{
    txHash: {
        hash: string;
    };
    outputIndex: bigint;
} | null>;
type PONftPolicyRedeemer = Data.Static<typeof PONftPolicyRedeemerSchema>;
declare const PONftPolicyRedeemer: PONftPolicyRedeemer;
declare const PubKeyHashSchema: _lucid_evolution_lucid.TUnsafe<string>;
type PubKeyHashD = Data.Static<typeof PubKeyHashSchema>;
declare const PubKeyHashD: PubKeyHashD;
declare const CredentialSchema: _lucid_evolution_lucid.TUnion<(_lucid_evolution_lucid.TObject<{
    PublicKeyCredential: _lucid_evolution_lucid.TTuple<[_lucid_evolution_lucid.TUnsafe<string>]>;
}> | _lucid_evolution_lucid.TObject<{
    ScriptCredential: _lucid_evolution_lucid.TTuple<[_lucid_evolution_lucid.TUnsafe<string>]>;
}>)[]>;
type CredentialD = Data.Static<typeof CredentialSchema>;
declare const CredentialD: CredentialD;
declare const AddressSchema: _lucid_evolution_lucid.TObject<{
    paymentCredential: _lucid_evolution_lucid.TUnion<(_lucid_evolution_lucid.TObject<{
        PublicKeyCredential: _lucid_evolution_lucid.TTuple<[_lucid_evolution_lucid.TUnsafe<string>]>;
    }> | _lucid_evolution_lucid.TObject<{
        ScriptCredential: _lucid_evolution_lucid.TTuple<[_lucid_evolution_lucid.TUnsafe<string>]>;
    }>)[]>;
    stakeCredential: _lucid_evolution_lucid.TUnsafe<{
        Inline: [{
            PublicKeyCredential: [string];
        } | {
            ScriptCredential: [string];
        }];
    } | {
        Pointer: [{
            slotNumber: bigint;
            transactionIndex: bigint;
            certificateIndex: bigint;
        }];
    } | null>;
}>;
type AddressD = Data.Static<typeof AddressSchema>;
declare const AddressD: AddressD;
declare const RationalSchema: _lucid_evolution_lucid.TObject<{
    numerator: _lucid_evolution_lucid.TUnsafe<bigint>;
    denominator: _lucid_evolution_lucid.TUnsafe<bigint>;
}>;
type RationalD = Data.Static<typeof RationalSchema>;
declare const RationalD: RationalD;
declare const AssetClassSchema: _lucid_evolution_lucid.TObject<{
    symbol: _lucid_evolution_lucid.TUnsafe<string>;
    name: _lucid_evolution_lucid.TUnsafe<string>;
}>;
type AssetClassD = Data.Static<typeof AssetClassSchema>;
declare const AssetClassD: AssetClassD;
declare const ValueSchema: _lucid_evolution_lucid.TUnsafe<Map<string, Map<string, bigint>>>;
type ValueD = Data.Static<typeof ValueSchema>;
declare const ValueD: ValueD;
declare const PartialOrderConfigDatumSchema: _lucid_evolution_lucid.TObject<{
    pocdSignatories: _lucid_evolution_lucid.TArray<_lucid_evolution_lucid.TUnsafe<string>>;
    pocdReqSignatores: _lucid_evolution_lucid.TUnsafe<bigint>;
    pocdNftSymbol: _lucid_evolution_lucid.TUnsafe<string>;
    pocdFeeAddr: _lucid_evolution_lucid.TObject<{
        paymentCredential: _lucid_evolution_lucid.TUnion<(_lucid_evolution_lucid.TObject<{
            PublicKeyCredential: _lucid_evolution_lucid.TTuple<[_lucid_evolution_lucid.TUnsafe<string>]>;
        }> | _lucid_evolution_lucid.TObject<{
            ScriptCredential: _lucid_evolution_lucid.TTuple<[_lucid_evolution_lucid.TUnsafe<string>]>;
        }>)[]>;
        stakeCredential: _lucid_evolution_lucid.TUnsafe<{
            Inline: [{
                PublicKeyCredential: [string];
            } | {
                ScriptCredential: [string];
            }];
        } | {
            Pointer: [{
                slotNumber: bigint;
                transactionIndex: bigint;
                certificateIndex: bigint;
            }];
        } | null>;
    }>;
    pocdMakerFeeFlat: _lucid_evolution_lucid.TUnsafe<bigint>;
    pocdMakerFeeRatio: _lucid_evolution_lucid.TObject<{
        numerator: _lucid_evolution_lucid.TUnsafe<bigint>;
        denominator: _lucid_evolution_lucid.TUnsafe<bigint>;
    }>;
    pocdTakerFee: _lucid_evolution_lucid.TUnsafe<bigint>;
    pocdMinDeposit: _lucid_evolution_lucid.TUnsafe<bigint>;
}>;
type PartialOrderConfigDatum = Data.Static<typeof PartialOrderConfigDatumSchema>;
declare const PartialOrderConfigDatum: PartialOrderConfigDatum;
declare const PartialOrderContainedFeeSchema: _lucid_evolution_lucid.TObject<{
    pocfLovelaces: _lucid_evolution_lucid.TUnsafe<bigint>;
    pocfOfferedTokens: _lucid_evolution_lucid.TUnsafe<bigint>;
    pocfAskedTokens: _lucid_evolution_lucid.TUnsafe<bigint>;
}>;
type PartialOrderContainedFee = Data.Static<typeof PartialOrderContainedFeeSchema>;
declare const PartialOrderContainedFee: PartialOrderContainedFee;
declare const PartialOrderFeeOutputSchema: _lucid_evolution_lucid.TObject<{
    pofdMentionedFees: _lucid_evolution_lucid.TUnsafe<Map<{
        txHash: {
            hash: string;
        };
        outputIndex: bigint;
    }, Map<string, Map<string, bigint>>>>;
    pofdReservedValue: _lucid_evolution_lucid.TUnsafe<Map<string, Map<string, bigint>>>;
    pofdSpentUTxORef: _lucid_evolution_lucid.TUnsafe<{
        txHash: {
            hash: string;
        };
        outputIndex: bigint;
    } | null>;
}>;
type PartialOrderFeeOutput = Data.Static<typeof PartialOrderFeeOutputSchema>;
declare const PartialOrderFeeOutput: PartialOrderFeeOutput;
declare const POSIXTimeSchema: _lucid_evolution_lucid.TUnsafe<bigint>;
type POSIXTimeD = Data.Static<typeof POSIXTimeSchema>;
declare const POSIXTimeD: POSIXTimeD;
declare const PartialOrderDatumSchema: _lucid_evolution_lucid.TObject<{
    podOwnerKey: _lucid_evolution_lucid.TUnsafe<string>;
    podOwnerAddr: _lucid_evolution_lucid.TObject<{
        paymentCredential: _lucid_evolution_lucid.TUnion<(_lucid_evolution_lucid.TObject<{
            PublicKeyCredential: _lucid_evolution_lucid.TTuple<[_lucid_evolution_lucid.TUnsafe<string>]>;
        }> | _lucid_evolution_lucid.TObject<{
            ScriptCredential: _lucid_evolution_lucid.TTuple<[_lucid_evolution_lucid.TUnsafe<string>]>;
        }>)[]>;
        stakeCredential: _lucid_evolution_lucid.TUnsafe<{
            Inline: [{
                PublicKeyCredential: [string];
            } | {
                ScriptCredential: [string];
            }];
        } | {
            Pointer: [{
                slotNumber: bigint;
                transactionIndex: bigint;
                certificateIndex: bigint;
            }];
        } | null>;
    }>;
    podOfferedAsset: _lucid_evolution_lucid.TObject<{
        symbol: _lucid_evolution_lucid.TUnsafe<string>;
        name: _lucid_evolution_lucid.TUnsafe<string>;
    }>;
    podOfferedOriginalAmount: _lucid_evolution_lucid.TUnsafe<bigint>;
    podOfferedAmount: _lucid_evolution_lucid.TUnsafe<bigint>;
    podAskedAsset: _lucid_evolution_lucid.TObject<{
        symbol: _lucid_evolution_lucid.TUnsafe<string>;
        name: _lucid_evolution_lucid.TUnsafe<string>;
    }>;
    podPrice: _lucid_evolution_lucid.TObject<{
        numerator: _lucid_evolution_lucid.TUnsafe<bigint>;
        denominator: _lucid_evolution_lucid.TUnsafe<bigint>;
    }>;
    podNFT: _lucid_evolution_lucid.TUnsafe<string>;
    podStart: _lucid_evolution_lucid.TUnsafe<bigint | null>;
    podEnd: _lucid_evolution_lucid.TUnsafe<bigint | null>;
    podPartialFills: _lucid_evolution_lucid.TUnsafe<bigint>;
    podMakerLovelaceFlatFee: _lucid_evolution_lucid.TUnsafe<bigint>;
    podTakerLovelaceFlatFee: _lucid_evolution_lucid.TUnsafe<bigint>;
    podContainedFee: _lucid_evolution_lucid.TObject<{
        pocfLovelaces: _lucid_evolution_lucid.TUnsafe<bigint>;
        pocfOfferedTokens: _lucid_evolution_lucid.TUnsafe<bigint>;
        pocfAskedTokens: _lucid_evolution_lucid.TUnsafe<bigint>;
    }>;
    podContainedPayment: _lucid_evolution_lucid.TUnsafe<bigint>;
}>;
type PartialOrderDatum = Data.Static<typeof PartialOrderDatumSchema>;
declare const PartialOrderDatum: PartialOrderDatum;
declare const PartialOrderRedeemerSchema: _lucid_evolution_lucid.TUnion<(_lucid_evolution_lucid.TLiteral<"PartialCancel"> | _lucid_evolution_lucid.TObject<{
    PartialFill: _lucid_evolution_lucid.TTuple<[_lucid_evolution_lucid.TUnsafe<bigint>]>;
}> | _lucid_evolution_lucid.TLiteral<"CompleteFill">)[]>;
type PartialOrderRedeemer = Data.Static<typeof PartialOrderRedeemerSchema>;
declare const PartialOrderRedeemer: PartialOrderRedeemer;

/**
 * Represents various constants relevant to DEX.
 */
interface PartialOrderConstants {
    /**
     * The address where the fee configuration UTxO is stored.
     */
    configAddr: Address;
    /**
     * NFT used to identify fee configuration UTxO at {@link configAddr}.
     */
    refNft: Unit;
    /**
     * Output reference of swap minting policy script.
     */
    mintUTxO: UTxO;
    /**
     * Output reference of swap validator script.
     */
    valUTxO: UTxO;
    /**
     * Payment credential of the swap validator script.
     */
    valCred: Credential;
    /**
     * The policy ID for the NFT minting policy.
     */
    mintPolicyId: PolicyId;
}
interface PartialOrderNetworkConstants {
    preprod: PartialOrderConstants;
    mainnet: PartialOrderConstants;
}
declare const po: PartialOrderNetworkConstants;

interface Fees {
    percentTokenFees: Assets;
    flatLovelaceFees: bigint;
}

declare const fetchPartialOrderConfig: (lucid: LucidEvolution) => Promise<[PartialOrderConfigDatum, UTxO]>;
/**
 * Creates an order for a given Lucid instance.
 *
 * @param lucid - The Lucid instance.
 * @param tx - The transaction object upon which additional constraints are added.
 * @param anUTxO - An UTxO belonging to user's wallet, required to mint the special order tracking NFT, see [this](https://github.com/geniusyield/dex-contracts-api/tree/main/geniusyield-onchain/src/GeniusYield/OnChain/DEX#special-nft-for-partially-fillable-orders).
 * @param owner - The address of the owner.
 * @param offerAmt - The amount of the offer.
 * @param offerAC - The asset class of the offer.
 * @param priceAC - The asset class of the price.
 * @param price - The price as a RationalD object.
 * @param inlineDat - A boolean indicating whether the datum should be inlined or represented as hash.
 * @param aStakeCred - Optional. The stake credential used to place orders at a mangled address, with payment part of validator but staking part as specified by given credential.
 * @param start - Optional. The earliest start time after which order can be filled.
 * @param end - Optional. The end time after which order can no longer be filled.
 * @returns A Promise that resolves to a TxBuilder object.
 * @throws Throws an error if the offer amount is not positive, if the price numerator or denominator is not positive,
 * if the offered and asked assets are the same, or if the end time is earlier than the start time.
 */
declare const createOrder: (lucid: LucidEvolution, tx: TxBuilder, anUTxO: UTxO, owner: Address, offerAmt: bigint, offerAC: Unit, priceAC: Unit, price: RationalD, inlineDat: boolean, aStakeCred?: Credential, start?: UnixTime, end?: UnixTime) => Promise<[Fees, TxBuilder]>;
declare function myDatumOf(lucid: LucidEvolution, utxo: UTxO): Promise<PartialOrderDatum>;
/**
 * Cancels the specified orders.
 *
 * @param lucid - The instance of the Lucid class.
 * @param tx - The transaction object.
 * @param orderRefs - An array of order references to cancel.
 * @returns A promise that resolves to the updated transaction object.
 */
declare const cancelOrders: (lucid: LucidEvolution, tx: TxBuilder, orderRefs: OutRef[]) => Promise<TxBuilder>;
/**
 * Fills the orders with the specified amounts and returns a new transaction.
 *
 * @param lucid - The Lucid instance.
 * @param tx - The earlier transaction.
 * @param orderRefsWithAmt - An array of order references with their corresponding fill amounts.
 * @returns A promise that resolves to the new transaction with the filled orders.
 * @throws If the order cannot be filled before the start time, after the end time, if the fill amount is zero, or if the fill amount is greater than the offered amount.
 */
declare const fillOrders: (lucid: LucidEvolution, tx: TxBuilder, orderRefsWithAmt: [OutRef, bigint][]) => Promise<[Fees, TxBuilder]>;

/**
 * Converts a decimal number to a hexadecimal byte representation.
 * Throws an error if the number is out of byte range (0-255) or not an integer.
 *
 * @param decimal - The decimal number to convert.
 * @returns The hexadecimal byte representation of the decimal number.
 * @throws {Error} If the number is out of byte range (0-255) or not an integer.
 */
declare const decimalToHexByte: (decimal: number) => string;
/**
 * Calculates the expected token name based on the given `outRef`.
 *
 * @param outRef - The OutRef object containing the output index and transaction hash.
 * @returns A Promise that resolves to the calculated hash in hexadecimal format.
 */
declare const expectedTokenName: (outRef: OutRef) => Promise<string>;
declare function fromAddress(address: Address): AddressD;
declare function toAddress(address: AddressD, lucid: LucidEvolution): Address;
declare function fromOutRef(outRef: OutRef): OutputReferenceD;
declare function assetClassDFromUnit(unit: Unit): AssetClassD;
declare function assetClassDToUnit(ac: AssetClassD): Unit;
/**
 * Resolves the PartialOrderConstants based on the provided Lucid network.
 * @param lucid - The Lucid object containing the network information.
 * @returns The PartialOrderConstants object corresponding to the Lucid network.
 * @throws {Error} If the Lucid network is unsupported.
 */
declare function resolvePOConstants(lucid: LucidEvolution): PartialOrderConstants;
/**
 * Resolves an offer asset class based on the unit and amount provided.
 * If the unit is an empty string, it returns an object with the amount in lovelace.
 * Otherwise, it returns an object with the unit as the key and the amount as the value.
 * @param unit The unit of the asset.
 * @param amt The amount of the asset.
 * @returns An object representing the resolved asset class.
 */
declare function resolveAC(unit: Unit, amt: bigint): Assets;
/**
 * Merges two asset objects together by adding or appending the quantities of each asset.
 * @param a1 - The first asset object.
 * @param a2 - The second asset object.
 * @returns A new asset object that contains the merged assets.
 */
declare function mappendAssets(a1: Assets, a2: Assets): Assets;
/**
 * Negates the amounts of each asset in the given `Assets` object.
 * @param assets - The `Assets` object to negate.
 * @returns A new `Assets` object with negated amounts.
 */
declare function negateAssets(assets: Assets): Assets;
declare const zeroContainedFee: PartialOrderContainedFee;
declare function isEqualContainedFee(fee1: PartialOrderContainedFee, fee2: PartialOrderContainedFee): boolean;
/**
 * Adds two `PartialOrderContainedFee` objects together and returns the result.
 * @param fee1 - The first `PartialOrderContainedFee` object.
 * @param fee2 - The second `PartialOrderContainedFee` object.
 * @returns A new `PartialOrderContainedFee` object representing the addition of `fee1` and `fee2`.
 */
declare function addContainedFees(fee1: PartialOrderContainedFee, fee2: PartialOrderContainedFee): PartialOrderContainedFee;
declare function fromAssets(assets: Assets): ValueD;
declare function toAssets(value: ValueD): Assets;
declare function maxBigint(a: bigint, b: bigint): bigint;
declare function minBigint(a: bigint, b: bigint): bigint;
declare function ensure<T>(argument: T | undefined | null, message?: string): T;

export { AddressD, AddressSchema, AssetClassD, AssetClassSchema, CredentialD, CredentialSchema, type Fees, OutputReferenceD, OutputReferenceSchema, PONftPolicyRedeemer, PONftPolicyRedeemerSchema, POSIXTimeD, POSIXTimeSchema, PartialOrderConfigDatum, PartialOrderConfigDatumSchema, type PartialOrderConstants, PartialOrderContainedFee, PartialOrderContainedFeeSchema, PartialOrderDatum, PartialOrderDatumSchema, PartialOrderFeeOutput, PartialOrderFeeOutputSchema, type PartialOrderNetworkConstants, PartialOrderRedeemer, PartialOrderRedeemerSchema, PubKeyHashD, PubKeyHashSchema, RationalD, RationalSchema, ValueD, ValueSchema, addContainedFees, assetClassDFromUnit, assetClassDToUnit, cancelOrders, createOrder, decimalToHexByte, ensure, expectedTokenName, fetchPartialOrderConfig, fillOrders, fromAddress, fromAssets, fromOutRef, isEqualContainedFee, mappendAssets, maxBigint, minBigint, myDatumOf, negateAssets, po, resolveAC, resolvePOConstants, toAddress, toAssets, zeroContainedFee };
