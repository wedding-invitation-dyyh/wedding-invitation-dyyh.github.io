export interface IData {
  type: string;
  splashColor?: string;
  mainColor?: string;
  subColor?: string;
  mainFont?: string;
  splashMode?: string;
  font?: string;
  main: IMain;
  hostInfo: IHostInfo[];
  mapInfo: IMapInfo;
}

export interface IMain {
  mainImg?: string;
  title: string;
  subtitle?: string;
  date: string;
  message: string;
  host: {
    groom: BrideAndGroom;
    bride: BrideAndGroom;
  };
  eventDetail: string;
  eventDetail_without_date: string;
}

export interface BrideAndGroom {
  name: string;
  relation: string;
  parents: Parent;
}

type Parent = { relation: string; isDeceased?: boolean; name: string }[];

export interface IMapInfo {
  address1: string;
  address2: string;
  naverMap: string;
  location: ILocationInfo[];
}

export interface ILocationInfo {
  title: string;
  desc: string;
}

// Account
export interface IHostInfo {
  host: string;
  accountInfo: {
    name: string;
    relation: string;
    bank: string;
    account: string;
    kakaopayAccount?: string;
    tossAccount?: string;
  }[];
}
