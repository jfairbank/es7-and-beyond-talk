import eventLib from 'eventLib';

const point = {
  clicked(e) {
    this.updateCoordinates(e.data);
  },

  updateCoordinates({ x, y }) {
    this.x = x;
    this.y = y;
  }
};

eventLib.on('click', ::obj.clicked);
eventLib.on('info', ::console.log);
