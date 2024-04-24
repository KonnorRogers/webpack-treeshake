// import { foo } from "./treeshake.js"
import {
    foo,
    // bar,
    // baz
} from "my-package"

foo() // => console.log("foo")
// bar() // => console.log("bar")
// baz() // => console.log("baz")
