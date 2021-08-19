class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  //Método de instancia
  aumentarVolume(volume) {
    this.volume += 1;
  }
  diminuirVolume(volume) {
    this.volume -= 1;
  }

  //Método estático
  static trocaPilha() {
    console.log('Pilha trocada');
  }
}

//Chamando método de instancia
const controle1 = new ControleRemoto('Samsung');
console.log(controle1);
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

//Chamando método estático
ControleRemoto.trocaPilha();