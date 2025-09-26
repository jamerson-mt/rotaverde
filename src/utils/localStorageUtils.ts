const USER_KEY = "user";

function isLocalStorageAvailable() {
  try {
    const testKey = "__test__";
    localStorage.setItem(testKey, "test");
    localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
}

export function saveUserData(user: object) {
  if (isLocalStorageAvailable()) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
}

export function getUserData() {
  if (isLocalStorageAvailable()) {
    const userData = localStorage.getItem(USER_KEY);
    return userData ? JSON.parse(userData) : null;
  }
  return null;
}

export function removeUserData() {
  if (isLocalStorageAvailable()) {
    localStorage.removeItem(USER_KEY);
  }
}
