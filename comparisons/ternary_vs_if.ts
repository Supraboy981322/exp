"use strict";

const p = (str:string):void => console.log(str);

/*
 * single branch
 */

//single-line if
if (1 > 0) p("foo");

//multi-line if
if (1 > 0) {
  p("foo");
}

//single-line ternary
(1 > 0) ? p("foo") : {};

//multi-line ternary
(0 > 1) ? (
  p("foo")
) : {};

//multi-line ternary with lambda
(0 > 1) ? (() => {
  p("foo");
})() : {};



/*
 * double-branch 
 */ 

//if: multi-line first branch, single-line second
if (0 > 1) {
  p("foo");
} else p("bar");

//if: multi-line
if (0 > 1) {
  p("foo");
} else {
  p("bar");
}

//ternary: single line
(0 > 1) ? p("foo") : p("bar");

//ternary: single first, multi second
(0 > 1) ? p("foo") : (
  p("bar")
);

//ternary: multi first, single second
(0 > 1) ? (
  p("foo")
) : p("bar");

//ternary: multi-line
(0 > 1) ? (
  p("foo")
) : (
  p("bar")
);

//ternary: lambda single line
((0 > 1) ? () => p("foo") : () => { p("bar"); })();

//ternary: single first, lambda second
(0 > 1) ? p("foo") : (() => {
  p("bar");
})();

//tarnary: lambda first, single second
(0 > 1) ? (() => {
  p("foo");
})() : p("bar");

//ternary: lambda
((0 > 1) ? () => {
  p("foo");
} : () => {
  p("bar");
})();

//ternary + if (if-else-if): single line
if (0 > 1) (1 > 2) ? ( p("foo") ) : p("bar")

//ternary + if (if-else-if): multi-line
if (0 > 1) (1 > 2) ? (
  p("foo")
) : (
  p("bar")
);

//ternary + if (if-else-if): lambda
if (0 > 1) (
  (1 > 2) ? 
    () => {
    p("foo");
  } : () => {
    p("bar");
  }
)();


/*
 * triple branch
 * (lets pretend that I included all the options from above too */

//ternary
(0 > 1) ? (
  p("foo")
) : (0 > 1) ? (
  p("bar")
) : (
  p("baz")
);

//if
if (0 > 1) {
  p("foo");
} else if (0 > 1) {
  p("bar");
} else {
  p("baz");
}

//if-else + ternary:
if (0 > 1) {
  p("foo");
} else (1 > 2) ? (
  p("foo")
) : (
  p("bar")
);
