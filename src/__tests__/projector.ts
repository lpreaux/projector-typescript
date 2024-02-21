import Projector from "../projector";
import {Operation} from "../config";

function getData() {
    return {
        projector: {
            "/": {
                "foo": "bar1",
                "fem": "is_great",
            },
            "/foo": {
                "foo": "bar2",
            },
            '/foo/bar': {
                "foo": "bar3",
            }
        }
    };
}

function getProjector(pwd: string, data = getData()): Projector {
    return new Projector({
        args: [],
        operation: Operation.Print,
        pwd,
        config: "Hello, Frontend Masters"
    }, data);
}

test("getAllValue", function() {
    const proj = getProjector("/foo/bar");
    expect(proj.getAllValue()).toEqual({
        "fem": "is_great",
        "foo": "bar3",
    })
})

test("getValue", function() {
    let proj = getProjector("/foo/bar");
    expect(proj.getValue("foo")).toEqual("bar3");
    proj = getProjector("/foo");
    expect(proj.getValue("foo")).toEqual("bar2");
    expect(proj.getValue("fem")).toEqual("is_great");
})

test("setValue", function() {
    const data = getData();
    let proj = getProjector("/foo/bar", data);
    proj.setValue("foo", "baz");
    expect(proj.getValue("foo")).toEqual("baz");
    
    proj.setValue("fem", "is_bette_than_great");
    expect(proj.getValue("fem")).toEqual("is_bette_than_great");
    proj = getProjector("/foo", data);
    expect(proj.getValue("fem")).toEqual("is_great");
})

test("removeValue", function() {
    const proj = getProjector("/foo/bar");
    proj.removeValue("foo");
    expect(proj.getValue("foo")).toEqual("bar2");

    proj.removeValue("fem");
    expect(proj.getValue("fem")).toEqual("is_great");
})