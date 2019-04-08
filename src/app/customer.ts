export class Customer {

  constructor(
      public studentId: string,
      public FAFSA: boolean,
      public SNAP: boolean,
      public WIC: boolean,
      public SSI: boolean,
      public TAFDC: boolean,
      public MRC: boolean,
      public SNAPAssistance: boolean,
      public currentHousingSituation: string,
      public federalIncomeGuideline: string,
  ) { }

}
