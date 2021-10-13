let effects = {
  explotionEntity: new effect(0.1, (x, y, rotation, data, this_) => {
    for (let i = 0; i < MathFs.randFloat(5,10); i++) {
      let particle = new Particle({
        size: MathFs.randFloat(20,data.getSize()/2),
        img: data.img,
        speed: MathFs.randFloat(100,200),
        hasAlfa: true,
        lifeTime: this_.time
      });

      particle.at(x, y, MathFs.randFloat(0, 360));
    }
  }),
  explotionEntitySmall: new effect(0.1, (x, y, rotation, data, this_) => {
    for (let i = 0; i < MathFs.randFloat(1,3); i++) {
      let particle = new Particle({
        size: MathFs.randFloat(5, data.getSize() / 2),
        img: data.img,
        speed: MathFs.randFloat(100, 200),
        hasAlfa: true,
        lifeTime: this_.time
      });
    
      particle.at(x, y, MathFs.randFloat(0, 360));
    }
  })

}