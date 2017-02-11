// 函数无直接申明 return 返回值

// Function returning never must have unreachable end point
function error(message: string): never {
  throw new Error(message);
}

// Inferred return type is never
function fail(argument) {
  return error("Something failed");
}

// Function returning never must have unreachable and point
function infiniteLoop(): never {
  while (true) {};
}

