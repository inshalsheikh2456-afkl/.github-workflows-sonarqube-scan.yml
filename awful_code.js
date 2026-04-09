// ============================================
// BAD CODE FILE — SonarQube Detection Test
// ============================================

// ❌ CODE SMELL: Variable declared but never used
var unusedVariable = "nobody uses me";
var anotherUselessVar = 42;

// ❌ VULNERABILITY: Hardcoded credentials
var username = "admin";
var password = "supersecret123";
var apiKey = "sk-1234567890abcdef";

// ❌ BUG: Empty catch block — errors silently ignored
function parseData(data) {
  try {
    return JSON.parse(data);
  } catch (e) {
    // error swallowed — very bad practice
  }
}

// ❌ VULNERABILITY: SQL Injection risk
function getUser(userId) {
  var query = "SELECT * FROM users WHERE id = " + userId;
  return query;
}

// ❌ BUG: Using == instead of === (unsafe comparison)
function checkAdmin(role) {
  if (role == 1) {
    return true;
  }
  return false;
}

// ❌ CODE SMELL: Duplicate functions (copy paste code)
function addNumbers(a, b) {
  return a + b;
}
function sumNumbers(a, b) {
  return a + b;
}

// ❌ BUG: Infinite loop risk
function riskyLoop(x) {
  while (x > 0) {
    console.log(x);
    // x is never decreased — infinite loop!
  }
}

// ❌ VULNERABILITY: Eval is dangerous
function runCode(userInput) {
  eval(userInput); // never use eval with user input!
}

// ❌ CODE SMELL: Deeply nested code (hard to read)
function deepNesting(a, b, c, d) {
  if (a) {
    if (b) {
      if (c) {
        if (d) {
          return "too deep!";
        }
      }
    }
  }
}
