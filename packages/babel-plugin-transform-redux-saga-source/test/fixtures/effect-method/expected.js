function* test1() {
  yield function reduxSagaSource() {
    var res = foo.bar(1, 2, 3);
    res.__source = {
      fileName: "{{filename}}",
      lineNumber: 2,
      code: "foo.bar(1, 2, 3)"
    };
    return res;
  }();
}

test1.__source = {
  fileName: "{{filename}}",
  lineNumber: 1
};