export interface IGradeItem {
  current: TGrade;
}

export type TGrade = 'A-' | 'A' | 'A+' | 'B-' | 'B' | 'B+' | 'C-' | 'C' | 'C+' | 'D-' | 'D' | 'D+' | 'F';

export type TFactor = 'Valuation' | 'Growth' | 'Profitability' | 'Momentum' | 'Revisions';

export interface IFactorGradesData {
  factor: TFactor;
  now: TGrade;
  threeMonthsAgo: TGrade;
  sixMonthsAgo: TGrade;
}
/**{
    "Valuation": {
        "current": "F",
    },
    "Growth": {
        "current": "D-"
    },
    "Profitability": {
        "current": "A+"
    },
    "Momentum": {
        "current": "B+"
    },
    "Revisions": {
        "current": "B-"
    }
} */
export type TGrades = Record<TFactor, IGradeItem>;

/*{
    "Valuation":  "F",
    "Growth": "C-",
    "Profitability":  "A+",
    "Momentum": "C-",
    "Revisions": "C"
}
*/
export type T3MGrades = Record<TFactor, TGrade>;

/*{
  "data": [
    [
      "Growth",
      "D"
    ],
    [
      "Profitability",
      "A+,
    ],
    [
      "Valuation",
      "F",
    ]
    [
      "Momentum",
      "C"
    ],
    [
      "Revisions",
      "C
    ],
  ]
}
*/

export type T6MGrade = [TFactor, TGrade];

export type T6MGrades = T6MGrade[];
