var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(streetAddress, postcode, city, companyName, position, annualIncome) {
        if (streetAddress === void 0) { streetAddress = ''; }
        if (postcode === void 0) { postcode = ''; }
        if (city === void 0) { city = ''; }
        if (companyName === void 0) { companyName = ''; }
        if (position === void 0) { position = ''; }
        if (annualIncome === void 0) { annualIncome = 0; }
        this.streetAddress = streetAddress;
        this.postcode = postcode;
        this.city = city;
        this.companyName = companyName;
        this.position = position;
        this.annualIncome = annualIncome;
    }
    Person.prototype.toString = function () {
        return "Person lives at ".concat(this.streetAddress, ", ").concat(this.city, ", ").concat(this.postcode, "\n")
            + "and works at ".concat(this.companyName, " as a ").concat(this.position, " earning ").concat(this.annualIncome);
    };
    return Person;
}());
var PersonBuilder = /** @class */ (function () {
    function PersonBuilder(person) {
        if (person === void 0) { person = new Person(); }
        this.person = person;
    }
    Object.defineProperty(PersonBuilder.prototype, "lives", {
        get: function () {
            return new PersonAddressBuilder(this.person);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PersonBuilder.prototype, "works", {
        get: function () {
            return new PersonJobBuilder(this.person);
        },
        enumerable: false,
        configurable: true
    });
    PersonBuilder.prototype.build = function () {
        return this.person;
    };
    return PersonBuilder;
}());
var PersonAddressBuilder = /** @class */ (function (_super) {
    __extends(PersonAddressBuilder, _super);
    function PersonAddressBuilder(person) {
        return _super.call(this, person) || this;
    }
    PersonAddressBuilder.prototype.at = function (streetAddress) {
        this.person.streetAddress = streetAddress;
        return this;
    };
    PersonAddressBuilder.prototype.withPostcode = function (postcode) {
        this.person.postcode = postcode;
        return this;
    };
    PersonAddressBuilder.prototype["in"] = function (city) {
        this.person.city = city;
        return this;
    };
    return PersonAddressBuilder;
}(PersonBuilder));
var PersonJobBuilder = /** @class */ (function (_super) {
    __extends(PersonJobBuilder, _super);
    function PersonJobBuilder(person) {
        return _super.call(this, person) || this;
    }
    PersonJobBuilder.prototype.at = function (companyName) {
        this.person.companyName = companyName;
        return this;
    };
    PersonJobBuilder.prototype.asA = function (position) {
        this.person.position = position;
        return this;
    };
    PersonJobBuilder.prototype.earning = function (annualIncome) {
        this.person.annualIncome = annualIncome;
        return this;
    };
    return PersonJobBuilder;
}(PersonBuilder));
var pb = new PersonBuilder();
var person = pb
    .lives.at('123 London Road')["in"]('London').withPostcode('SW12BC')
    .works.at('Fabrikam').asA('Engineer').earning(123000)
    .build();
console.log(person.toString());
