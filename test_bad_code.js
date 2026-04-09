// ❌ BUG: Variable declared but never used (Code Smell)
var unusedVariable = "I am never used";

// ❌ VULNERABILITY: Hardcoded password (Security Hotspot)
var password = "supersecret123";

// ❌ BUG: Empty catch block — errors are silently ignored
try {
  JSON.parse("not valid json");
} catch (e) {
  // doing nothing — this is bad practice
}

// ❌ CODE SMELL: Duplicate code (copy-pasted logic)
function add(a, b) {
  return a + b;
}
function addNumbers(a, b) {
  return a + b;  // exact duplicate of above function
}

// ❌ BUG: == instead of === (type-unsafe comparison)
function isAdmin(role) {
  if (role == 1) {   // Should be ===
    return true;
  }
  return false;
}

// ❌ VULNERABILITY: SQL Injection risk
function getUser(userId) {
  var query = "SELECT * FROM users WHERE id = " + userId;  // Never concatenate SQL!
  return query;
}
