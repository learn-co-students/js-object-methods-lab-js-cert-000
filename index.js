// code solution here

class President {
  constructor(name, politicalParty, yearsInOffice, homeState) {
    this.name = name;
    this.politicalParty = politicalParty;
    this.yearsInOffice = yearsInOffice;
    this.homeState = homeState;
  }
  veto() {
    return "NO!";
  }

  passBill() {
    return "You can do that!";
  }

  doCharity() {
    return "I like to help people.";
  }

  conductPressInterview() {
    return "I am proud to be an American.";
  }

  sayHi() {
    return "Hi, my name is " + this.name + ". I am from " + this.homeState + ". I represent the " + this.politicalParty + "s, and was in office " + this.yearsInOffice + "."
  }
}

var georgeWashington = new President("George Washington", "Federalist", [1789, 1790, 1791, 1792, 1793, 1794, 1795, 1796, 1797], "Virginia");

var abrahamLincoln = new President("Abraham Lincoln", "National Union Party", [1861, 1862, 1863, 1864], "Kentucky");

var richardNixon = new President("Richard Nixon", "Republican", [1969, 1970, 1971, 1972, 1973, 1974], "California");

var jimmyCarter = new President("Jimmy Carter", "Democratic", [1977, 1978, 1979, 1980, 1981], "Georgia");
