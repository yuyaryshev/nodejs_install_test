const { expect } = require("chai");

describe(`better-sqlite3`, function () {
    it(`better-sqlite3`, async function () {
        const db = require("better-sqlite3")("test.db");
        try {
            db.exec("drop table test");
        } catch (e) {}
        db.exec("create table test(id,a,b)");
        db.exec(`insert into test(id,a,b) values(1,'a1', 'b1')`);
        db.exec(`insert into test(id,a,b) values(2,'a2', 'b2')`);

        const row = db.prepare("SELECT id,a,b FROM test WHERE id = ?").get(2);
        expect(row).to.deep.equal({ id: 2, a: "a2", b: "b2" });
    });
});
