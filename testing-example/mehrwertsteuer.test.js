const { mwst, brutto } = require("./mehrwertsteuer");

test("7% von 100 soll 7% ergeben", () => {
    expect(mwst(100, 0.07)).toBe(7);
});

test("19% von 200 = soll 38 ergeben", () => {
    expect(mwst(200, 0.19)).toBe(38);
});

test("wenn Betrag 0 = Steuer 0", () => {
    expect(mwst(0, 0.19)).toBe(0);
});

test("100 netto bei 19% soll 119 Brutto ergeben", () => {
    expect(brutto(100, 0.19)).toBe(119);
});

test("50 netto bei 7% soll 53,5 Brutto ergeben", () => {
    expect(brutto(50, 0.07)).toBe(53.5);
});
