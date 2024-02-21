import config, {Operation} from "../config";

test("simple print all", function() {
    const configuration = config({});
    expect(configuration.args).toEqual([])
})

test("simple print key", function() {
    const configuration = config({
        args: ["foo"],
    });
    expect(configuration.operation).toEqual(Operation.Print);
    expect(configuration.args).toEqual(["foo"]);
})

test("add key value", function() {
    const configuration = config({
        args: ["add", "foo", "bar"],
    });
    expect(configuration.operation).toEqual(Operation.Add);
    expect(configuration.args).toEqual(["foo", "bar"]);
})

test("remove key value", function() {
    const configuration = config({
        args: ["remove", "foo"],
    });
    expect(configuration.operation).toEqual(Operation.Remove);
    expect(configuration.args).toEqual(["foo"]);
})