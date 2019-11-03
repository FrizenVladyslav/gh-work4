const ll1 = {
  value: 2,
  next: {
    value: 4,
    next: {
      value: 3,
      next: null
    }
  }
};
const ll2 = {
  value: 5,
  next: {
    value: 6,
    next: {
      value: 4,
      next: null
    }
  }
};

function sum(firstList = {}, secondList = {}, accumulator = 0) {
  const isLastElement = !firstList.next && !secondList.next;

  let result = Number(firstList.value) + Number(secondList.value) + accumulator;
  if (result > 9) {
    accumulator = result % 9;
    result = 0;
  }

  return {
    value: result,
    next: isLastElement
      ? null
      : sum(firstList.next, secondList.next, accumulator)
  };
}

console.log("sum linked lists", sum(ll1, ll2));
