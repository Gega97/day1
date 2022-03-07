import Array "mo:base/Array";
import Buffer "mo:base/Buffer";
import Nat "mo:base/Nat";

actor {

  var count = 0;
  //**** Handle basic ooperation *****/////
  public func sum(a : Nat, b : Nat) : async Nat {
    return a+b;
  };

  public func division(a : Nat, b : Nat) : async Bool {
    return a%b == 0;
  };

  public func isEven(a : Nat) : async Bool {
    return a%2 == 0;
  };

  public func squareRoot(a : Nat) : async Nat {
    return a*a;
  };

  ////**** convert a day in seconds ****//////

  public func dayInSeconds(a : Nat) : async Nat {
    return a*24*60*60;
  };

  ////**** Handle counter operations *****/////

  public func addCount(a : Nat) : async Nat {
    count += a;
    return count;
  };

  public func findCount() : async Nat {
    return count;
  };
  
  public func clearCount() : async () {
    count := 0;
  };


  ////***** Handle array operations ****//////

  public func sumArray(array : [Nat]) : async Nat {
    var sum = 0;
    for (value in array.vals()) {
      sum += value; 
    };
    return sum;
  };
  
  public func max(array : [Nat]) : async Nat {
    return Array.sort(array, Nat.compare)[array.size()-1];
  };

  public func deleteFromArray(array : [Nat], a : Nat) : async [Nat] {
    var temporal : [Nat] = [];
    for (value in array.vals()) {
      if(value != a) {
        temporal := Array.append(temporal, [value]);
      };
    };
    return temporal;
  };
  
  public func sort(array : [Nat]) : async [Nat] {
    return Array.sort(array, Nat.compare);
  };
};