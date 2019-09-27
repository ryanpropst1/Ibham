class Stage {
  constructor() {
    this.tileSize = 20;
    this.map = [[1, 0], [0, 1]];
  }

  draw(ctx) {
    this.map.forEach((row, y) => {
      row.forEach((id, x) => {
        let xpos = x * this.tileSize;
        let ypos = y * this.tileSize;
        ctx.save();
        ctx.beginPath();
        ctx.strokeRect(xpos, ypos, this.tilesize, this.tilesize);
        ctx.fillStyle = id ? "black" : "lightgray";
        ctx.fillRect(xpos, ypos, this.tilesize, this.tilesize);
        ctx.stroke();
        ctx.restore();
      });
    });
  }
}

class App {
  constructor() {
    console.log("Canvas Tiles");
    let canvas = document.createElement("canvas");
    let stage = new Stage();
    // canvas.width = 40;
    // canvas.height = 40;
    canvas.width = stage.tileSize * stage.map[0].length;
    canvas.height = stage.tileSize * stage.map.length;
    document.body.appendChild(canvas);
    let ctx = canvas.getContext("2d");
    stage.draw(ctx);
  }
}

new App();
