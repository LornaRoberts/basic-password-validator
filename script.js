function isValidPassword(username, password) {
    const tooSimilar = username.includes("password");
    const tooShort = username.length <= 7;
    const hasSpace = username.includes(" ");

    if (tooSimilar || tooShort || hasSpace) return false;
    return true;
};

console.log(isValidPassword('efefefffe','efeegrgegreg'));
console.log(isValidPassword("shorty", "shorty"));
