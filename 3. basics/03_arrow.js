const user = {
  username: "Abhishek",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};


user.welcomeMessage