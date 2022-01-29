/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface CreatorDAOLTInterface extends utils.Interface {
  functions: {
    "CommunityManagerExists(address)": FunctionFragment;
    "addCommunityManager(address[])": FunctionFragment;
    "airdrop(uint256,address[])": FunctionFragment;
    "allowancesProposal(uint256[],address[],bool)": FunctionFragment;
    "allowancesProposalIds(uint256)": FunctionFragment;
    "communityManagers(uint256)": FunctionFragment;
    "creator()": FunctionFragment;
    "currentBalanceUpdate()": FunctionFragment;
    "generalProposal(string,uint256)": FunctionFragment;
    "generalProposalVote(uint256,uint256)": FunctionFragment;
    "initialise(address,uint256,address)": FunctionFragment;
    "nativeTokenAllowances(address)": FunctionFragment;
    "nativeTokenBalance()": FunctionFragment;
    "nativeTotalAllowances()": FunctionFragment;
    "proposal(uint256)": FunctionFragment;
    "proposalManagerAllowancesInfoLength(uint256)": FunctionFragment;
    "proposalManagerAllowanesInfo(uint256,uint256)": FunctionFragment;
    "proposalStatus(uint256)": FunctionFragment;
    "proposalVoteDataInfo(uint256,uint256)": FunctionFragment;
    "proposals()": FunctionFragment;
    "redeemAllowances(uint256,uint256)": FunctionFragment;
    "redeemFromTreasury(uint256,uint256)": FunctionFragment;
    "removeCommunityManager(uint256)": FunctionFragment;
    "sendAllowances(address[],uint256[],uint256[])": FunctionFragment;
    "setAllowances(address[],uint256[],bool)": FunctionFragment;
    "token()": FunctionFragment;
    "updateManagerAllowances(uint256)": FunctionFragment;
    "updateVotingDuration(uint256)": FunctionFragment;
    "usdAllowances(address)": FunctionFragment;
    "usdBalance()": FunctionFragment;
    "usdTotalAllowances()": FunctionFragment;
    "votingDuration()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "CommunityManagerExists",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "addCommunityManager",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "airdrop",
    values: [BigNumberish, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "allowancesProposal",
    values: [BigNumberish[], string[], boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "allowancesProposalIds",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "communityManagers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "creator", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "currentBalanceUpdate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "generalProposal",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "generalProposalVote",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialise",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "nativeTokenAllowances",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "nativeTokenBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nativeTotalAllowances",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposal",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "proposalManagerAllowancesInfoLength",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "proposalManagerAllowanesInfo",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "proposalStatus",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "proposalVoteDataInfo",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "proposals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "redeemAllowances",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemFromTreasury",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeCommunityManager",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "sendAllowances",
    values: [string[], BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setAllowances",
    values: [string[], BigNumberish[], boolean]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateManagerAllowances",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateVotingDuration",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "usdAllowances",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "usdBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "usdTotalAllowances",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "votingDuration",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "CommunityManagerExists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addCommunityManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "airdrop", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allowancesProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowancesProposalIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "communityManagers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "creator", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentBalanceUpdate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "generalProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "generalProposalVote",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialise", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nativeTokenAllowances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nativeTokenBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nativeTotalAllowances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "proposal", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposalManagerAllowancesInfoLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalManagerAllowanesInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalVoteDataInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "redeemAllowances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "redeemFromTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeCommunityManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendAllowances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAllowances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateManagerAllowances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateVotingDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "usdAllowances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "usdBalance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "usdTotalAllowances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "votingDuration",
    data: BytesLike
  ): Result;

  events: {
    "Airdropped(address,uint256,address)": EventFragment;
    "allowancesRedeemed(address,uint256,address,uint256)": EventFragment;
    "allowancesUpdated(address,address,address,uint256,bool)": EventFragment;
    "creatorRedeemed(address,uint256,uint256)": EventFragment;
    "managerAdded(address,address)": EventFragment;
    "managerRemoved(address,address)": EventFragment;
    "proposalCreated(uint256,address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Airdropped"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "allowancesRedeemed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "allowancesUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "creatorRedeemed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "managerAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "managerRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "proposalCreated"): EventFragment;
}

export type AirdroppedEvent = TypedEvent<
  [string, BigNumber, string],
  { creator: string; amount: BigNumber; member: string }
>;

export type AirdroppedEventFilter = TypedEventFilter<AirdroppedEvent>;

export type allowancesRedeemedEvent = TypedEvent<
  [string, BigNumber, string, BigNumber],
  { dao: string; amount: BigNumber; member: string; tokenId: BigNumber }
>;

export type allowancesRedeemedEventFilter =
  TypedEventFilter<allowancesRedeemedEvent>;

export type allowancesUpdatedEvent = TypedEvent<
  [string, string, string, BigNumber, boolean],
  {
    dao: string;
    from: string;
    to: string;
    amount: BigNumber;
    nativeAllowance: boolean;
  }
>;

export type allowancesUpdatedEventFilter =
  TypedEventFilter<allowancesUpdatedEvent>;

export type creatorRedeemedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { dao: string; amount: BigNumber; tokenId: BigNumber }
>;

export type creatorRedeemedEventFilter = TypedEventFilter<creatorRedeemedEvent>;

export type managerAddedEvent = TypedEvent<
  [string, string],
  { dao: string; manager: string }
>;

export type managerAddedEventFilter = TypedEventFilter<managerAddedEvent>;

export type managerRemovedEvent = TypedEvent<
  [string, string],
  { dao: string; manager: string }
>;

export type managerRemovedEventFilter = TypedEventFilter<managerRemovedEvent>;

export type proposalCreatedEvent = TypedEvent<
  [BigNumber, string, string, BigNumber],
  { category: BigNumber; dao: string; proposer: string; proposalId: BigNumber }
>;

export type proposalCreatedEventFilter = TypedEventFilter<proposalCreatedEvent>;

export interface CreatorDAOLT extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CreatorDAOLTInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    CommunityManagerExists(
      manager: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    addCommunityManager(
      managers: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    airdrop(
      amount: BigNumberish,
      members: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    allowancesProposal(
      amount: BigNumberish[],
      managers: string[],
      _nativeAllowance: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    allowancesProposalIds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    communityManagers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    creator(overrides?: CallOverrides): Promise<[string]>;

    currentBalanceUpdate(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    generalProposal(
      linkToProposal: string,
      _choices: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    generalProposalVote(
      proposalId: BigNumberish,
      choice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialise(
      _creator: string,
      _votingDuration: BigNumberish,
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    nativeTokenAllowances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    nativeTokenBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    nativeTotalAllowances(overrides?: CallOverrides): Promise<[BigNumber]>;

    proposal(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string, BigNumber, BigNumber]>;

    proposalManagerAllowancesInfoLength(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    proposalManagerAllowanesInfo(
      proposalId: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, boolean] & {
        manager: string;
        amount: BigNumber;
        nativeAllowance: boolean;
      }
    >;

    proposalStatus(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { choice: BigNumber }>;

    proposalVoteDataInfo(
      proposalId: BigNumberish,
      choice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    proposals(overrides?: CallOverrides): Promise<[BigNumber]>;

    redeemAllowances(
      amount: BigNumberish,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    redeemFromTreasury(
      amount: BigNumberish,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeCommunityManager(
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sendAllowances(
      members: string[],
      amount: BigNumberish[],
      tokenId: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAllowances(
      _to: string[],
      _amount: BigNumberish[],
      _nativeAllowance: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    token(overrides?: CallOverrides): Promise<[string]>;

    updateManagerAllowances(
      proposalId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateVotingDuration(
      _votingDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    usdAllowances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    usdBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    usdTotalAllowances(overrides?: CallOverrides): Promise<[BigNumber]>;

    votingDuration(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  CommunityManagerExists(
    manager: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  addCommunityManager(
    managers: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  airdrop(
    amount: BigNumberish,
    members: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  allowancesProposal(
    amount: BigNumberish[],
    managers: string[],
    _nativeAllowance: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  allowancesProposalIds(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  communityManagers(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  creator(overrides?: CallOverrides): Promise<string>;

  currentBalanceUpdate(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  generalProposal(
    linkToProposal: string,
    _choices: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  generalProposalVote(
    proposalId: BigNumberish,
    choice: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialise(
    _creator: string,
    _votingDuration: BigNumberish,
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  nativeTokenAllowances(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  nativeTokenBalance(overrides?: CallOverrides): Promise<BigNumber>;

  nativeTotalAllowances(overrides?: CallOverrides): Promise<BigNumber>;

  proposal(
    proposalId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, string, BigNumber, BigNumber]>;

  proposalManagerAllowancesInfoLength(
    proposalId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  proposalManagerAllowanesInfo(
    proposalId: BigNumberish,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, boolean] & {
      manager: string;
      amount: BigNumber;
      nativeAllowance: boolean;
    }
  >;

  proposalStatus(
    proposalId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  proposalVoteDataInfo(
    proposalId: BigNumberish,
    choice: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  proposals(overrides?: CallOverrides): Promise<BigNumber>;

  redeemAllowances(
    amount: BigNumberish,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  redeemFromTreasury(
    amount: BigNumberish,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeCommunityManager(
    index: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sendAllowances(
    members: string[],
    amount: BigNumberish[],
    tokenId: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAllowances(
    _to: string[],
    _amount: BigNumberish[],
    _nativeAllowance: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  token(overrides?: CallOverrides): Promise<string>;

  updateManagerAllowances(
    proposalId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateVotingDuration(
    _votingDuration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  usdAllowances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  usdBalance(overrides?: CallOverrides): Promise<BigNumber>;

  usdTotalAllowances(overrides?: CallOverrides): Promise<BigNumber>;

  votingDuration(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    CommunityManagerExists(
      manager: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    addCommunityManager(
      managers: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    airdrop(
      amount: BigNumberish,
      members: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    allowancesProposal(
      amount: BigNumberish[],
      managers: string[],
      _nativeAllowance: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    allowancesProposalIds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    communityManagers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    creator(overrides?: CallOverrides): Promise<string>;

    currentBalanceUpdate(overrides?: CallOverrides): Promise<void>;

    generalProposal(
      linkToProposal: string,
      _choices: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    generalProposalVote(
      proposalId: BigNumberish,
      choice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    initialise(
      _creator: string,
      _votingDuration: BigNumberish,
      _token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    nativeTokenAllowances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nativeTokenBalance(overrides?: CallOverrides): Promise<BigNumber>;

    nativeTotalAllowances(overrides?: CallOverrides): Promise<BigNumber>;

    proposal(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string, BigNumber, BigNumber]>;

    proposalManagerAllowancesInfoLength(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proposalManagerAllowanesInfo(
      proposalId: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, boolean] & {
        manager: string;
        amount: BigNumber;
        nativeAllowance: boolean;
      }
    >;

    proposalStatus(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proposalVoteDataInfo(
      proposalId: BigNumberish,
      choice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    proposals(overrides?: CallOverrides): Promise<BigNumber>;

    redeemAllowances(
      amount: BigNumberish,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    redeemFromTreasury(
      amount: BigNumberish,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    removeCommunityManager(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    sendAllowances(
      members: string[],
      amount: BigNumberish[],
      tokenId: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    setAllowances(
      _to: string[],
      _amount: BigNumberish[],
      _nativeAllowance: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    token(overrides?: CallOverrides): Promise<string>;

    updateManagerAllowances(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateVotingDuration(
      _votingDuration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    usdAllowances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    usdBalance(overrides?: CallOverrides): Promise<BigNumber>;

    usdTotalAllowances(overrides?: CallOverrides): Promise<BigNumber>;

    votingDuration(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "Airdropped(address,uint256,address)"(
      creator?: null,
      amount?: null,
      member?: null
    ): AirdroppedEventFilter;
    Airdropped(
      creator?: null,
      amount?: null,
      member?: null
    ): AirdroppedEventFilter;

    "allowancesRedeemed(address,uint256,address,uint256)"(
      dao?: null,
      amount?: null,
      member?: null,
      tokenId?: null
    ): allowancesRedeemedEventFilter;
    allowancesRedeemed(
      dao?: null,
      amount?: null,
      member?: null,
      tokenId?: null
    ): allowancesRedeemedEventFilter;

    "allowancesUpdated(address,address,address,uint256,bool)"(
      dao?: null,
      from?: null,
      to?: null,
      amount?: null,
      nativeAllowance?: null
    ): allowancesUpdatedEventFilter;
    allowancesUpdated(
      dao?: null,
      from?: null,
      to?: null,
      amount?: null,
      nativeAllowance?: null
    ): allowancesUpdatedEventFilter;

    "creatorRedeemed(address,uint256,uint256)"(
      dao?: null,
      amount?: null,
      tokenId?: null
    ): creatorRedeemedEventFilter;
    creatorRedeemed(
      dao?: null,
      amount?: null,
      tokenId?: null
    ): creatorRedeemedEventFilter;

    "managerAdded(address,address)"(
      dao?: null,
      manager?: null
    ): managerAddedEventFilter;
    managerAdded(dao?: null, manager?: null): managerAddedEventFilter;

    "managerRemoved(address,address)"(
      dao?: null,
      manager?: null
    ): managerRemovedEventFilter;
    managerRemoved(dao?: null, manager?: null): managerRemovedEventFilter;

    "proposalCreated(uint256,address,address,uint256)"(
      category?: null,
      dao?: null,
      proposer?: null,
      proposalId?: null
    ): proposalCreatedEventFilter;
    proposalCreated(
      category?: null,
      dao?: null,
      proposer?: null,
      proposalId?: null
    ): proposalCreatedEventFilter;
  };

  estimateGas: {
    CommunityManagerExists(
      manager: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addCommunityManager(
      managers: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    airdrop(
      amount: BigNumberish,
      members: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    allowancesProposal(
      amount: BigNumberish[],
      managers: string[],
      _nativeAllowance: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    allowancesProposalIds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    communityManagers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    creator(overrides?: CallOverrides): Promise<BigNumber>;

    currentBalanceUpdate(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    generalProposal(
      linkToProposal: string,
      _choices: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    generalProposalVote(
      proposalId: BigNumberish,
      choice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialise(
      _creator: string,
      _votingDuration: BigNumberish,
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    nativeTokenAllowances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nativeTokenBalance(overrides?: CallOverrides): Promise<BigNumber>;

    nativeTotalAllowances(overrides?: CallOverrides): Promise<BigNumber>;

    proposal(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proposalManagerAllowancesInfoLength(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proposalManagerAllowanesInfo(
      proposalId: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proposalStatus(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proposalVoteDataInfo(
      proposalId: BigNumberish,
      choice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proposals(overrides?: CallOverrides): Promise<BigNumber>;

    redeemAllowances(
      amount: BigNumberish,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    redeemFromTreasury(
      amount: BigNumberish,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeCommunityManager(
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sendAllowances(
      members: string[],
      amount: BigNumberish[],
      tokenId: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAllowances(
      _to: string[],
      _amount: BigNumberish[],
      _nativeAllowance: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    updateManagerAllowances(
      proposalId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateVotingDuration(
      _votingDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    usdAllowances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    usdBalance(overrides?: CallOverrides): Promise<BigNumber>;

    usdTotalAllowances(overrides?: CallOverrides): Promise<BigNumber>;

    votingDuration(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    CommunityManagerExists(
      manager: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addCommunityManager(
      managers: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    airdrop(
      amount: BigNumberish,
      members: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    allowancesProposal(
      amount: BigNumberish[],
      managers: string[],
      _nativeAllowance: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    allowancesProposalIds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    communityManagers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    creator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    currentBalanceUpdate(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    generalProposal(
      linkToProposal: string,
      _choices: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    generalProposalVote(
      proposalId: BigNumberish,
      choice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialise(
      _creator: string,
      _votingDuration: BigNumberish,
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    nativeTokenAllowances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nativeTokenBalance(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nativeTotalAllowances(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proposal(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proposalManagerAllowancesInfoLength(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proposalManagerAllowanesInfo(
      proposalId: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proposalStatus(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proposalVoteDataInfo(
      proposalId: BigNumberish,
      choice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proposals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    redeemAllowances(
      amount: BigNumberish,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    redeemFromTreasury(
      amount: BigNumberish,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeCommunityManager(
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sendAllowances(
      members: string[],
      amount: BigNumberish[],
      tokenId: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAllowances(
      _to: string[],
      _amount: BigNumberish[],
      _nativeAllowance: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateManagerAllowances(
      proposalId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateVotingDuration(
      _votingDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    usdAllowances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    usdBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    usdTotalAllowances(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    votingDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
