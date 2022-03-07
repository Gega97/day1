import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'addCount' : (arg_0: bigint) => Promise<bigint>,
  'clearCount' : () => Promise<undefined>,
  'dayInSeconds' : (arg_0: bigint) => Promise<bigint>,
  'deleteFromArray' : (arg_0: Array<bigint>, arg_1: bigint) => Promise<
      Array<bigint>
    >,
  'division' : (arg_0: bigint, arg_1: bigint) => Promise<boolean>,
  'findCount' : () => Promise<bigint>,
  'isEven' : (arg_0: bigint) => Promise<boolean>,
  'max' : (arg_0: Array<bigint>) => Promise<bigint>,
  'sort' : (arg_0: Array<bigint>) => Promise<Array<bigint>>,
  'squareRoot' : (arg_0: bigint) => Promise<bigint>,
  'sum' : (arg_0: bigint, arg_1: bigint) => Promise<bigint>,
  'sumArray' : (arg_0: Array<bigint>) => Promise<bigint>,
}
