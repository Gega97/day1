export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'addCount' : IDL.Func([IDL.Nat], [IDL.Nat], []),
    'clearCount' : IDL.Func([], [], []),
    'dayInSeconds' : IDL.Func([IDL.Nat], [IDL.Nat], []),
    'deleteFromArray' : IDL.Func(
        [IDL.Vec(IDL.Nat), IDL.Nat],
        [IDL.Vec(IDL.Nat)],
        [],
      ),
    'division' : IDL.Func([IDL.Nat, IDL.Nat], [IDL.Bool], []),
    'findCount' : IDL.Func([], [IDL.Nat], []),
    'isEven' : IDL.Func([IDL.Nat], [IDL.Bool], []),
    'max' : IDL.Func([IDL.Vec(IDL.Nat)], [IDL.Nat], []),
    'sort' : IDL.Func([IDL.Vec(IDL.Nat)], [IDL.Vec(IDL.Nat)], []),
    'squareRoot' : IDL.Func([IDL.Nat], [IDL.Nat], []),
    'sum' : IDL.Func([IDL.Nat, IDL.Nat], [IDL.Nat], []),
    'sumArray' : IDL.Func([IDL.Vec(IDL.Nat)], [IDL.Nat], []),
  });
};
export const init = ({ IDL }) => { return []; };
