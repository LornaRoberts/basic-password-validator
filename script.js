function isValidPassword(username, password) {
    if (username.includes("password")){
        return false;
    }else if (username.length <= 7){
        return false;
    }else if(username.includes(" ")){
        return false;
    }return true;
};

console.log(isValidPassword('efefefffe','efeegrgegreg'));
console.log(isValidPassword("shorty", "shorty"));
