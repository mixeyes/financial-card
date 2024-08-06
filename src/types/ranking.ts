export interface IQuantRanking {
  category: string;
  detail: string;
}

/*{
  "sector": "Information Technology",
    "industry": "Technology Hardware, Storage and Peripherals",
      "rankings": {
    "overall": {
      "rank": 825,
        "total": 4455
    },
    "sector": {
      "rank": 105,
        "total": 552
    },
    "industry_specific": {
      "rank": 8,
        "total": 28
    }
  }
}*/

export interface IQuantRankings {
  sector: string;
  industry: string;
  rankings: {
    overall: {
      rank: number;
      total: number;
    };
    sector: {
      rank: number;
      total: number;
    };
    industry_specific: {
      rank: number;
      total: number;
    };
  };
}
