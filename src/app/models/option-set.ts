import {Option} from "./option";
export interface IOptionSet {
  id :string;
  options : Option
}

export class OptionSet implements IOptionSet{
  id :string;
  options : Option;

  constructor(optionSet:IOptionSet){
    this.id = optionSet.id;
    this.options = optionSet.options;
  }
}
