
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount : 1000,
    years : 1,
    rate : 12
  };
  expect(calculateMonthlyPayment(values)).toEqual('88.85')
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount : 10000,
    years : 10,
    rate : 5
  };
  expect(calculateMonthlyPayment(values)).toEqual('106.07')
});

it("should handle interest-free loans", function() {
    const values = {
      amount : 10000,
      years : 10,
      rate: 0
    };
    expect(calculateMonthlyPayment(values)).toEqual(1000)
  });

describe("Handles short and long term loans", function(){
 it("should handle short loans", function(){
    const values = {
      amount : 10000,
      years : 1,
      rate : 5
    };
    expect(calculateMonthlyPayment(values)).toEqual('856.07')
 })
 it("should handle long loans", function(){
  const values = {
    amount : 10000,
    years : 100,
    rate : 12
  };
  expect(calculateMonthlyPayment(values)).toEqual('100.00')
 })
});