// BAD CODE FILE — for SonarQube testing only

// ❌ Code Smell: variable declared but never used
var unusedVariable = "I am never used";

// ❌ Vulnerability: hardcoded password
var password = "supersecret123";

// ❌ Bug: empty catch block — errors are silently ignored
try {
  JSON.parse("not valid json");
} catch (e) {
  // doing nothing — this is bad practice
}

// ❌ Code Smell: duplicate functions
function add(a, b) {
  return a + b;
}
function addNumbers(a, b) {
  return a + b;
}

// ❌ Bug: using == instead of ===
function isAdmin(role) {
  if (role == 1) {
    return true;
  }
  return false;
}

// ❌ Vulnerability: SQL injection risk
function getUser(userId) {
  var query = "SELECT * FROM users WHERE id = " + userId;
  return query;
}
