const app = Vue.createApp({
  data() {
    return {
      yourName: "Nodar Tchikadze",
      yourAge: 25,
      agePlus: 25 + 5,
      image: "https://picsum.photos/200",
    };
  },
  methods: {
    setName(event) {
      this.yourName = event.target.value;
    },
    randomNumber() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return "0";
      } else {
        return "1";
      }
    },
  },
});

app.mount("#assignment");
