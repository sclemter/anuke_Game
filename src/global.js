/** global **/
let global = {
  ObjectGame: [],
  WindowRadius: 1,
  debuger: false,
  UpdateGame: true,
  objectLog() {
    console.table(this.ObjectGame)
  },
  setDebug: function() {
    if (!this.debuger) {
      this.debuger = true
    } else if (this.debuger) {
      this.debuger = false
    }
  },
  pause: function() {
    if (!this.UpdateGame) {
      this.UpdateGame = true
    } else if (this.UpdateGame) {
      this.UpdateGame = false
    }
  },
  /* add object */
  addObjectGame: function(object) {
    
      this.ObjectGame.push(object);
      this.ObjectGame.sort((a, b) => {
        if (a.drawLayer < b.drawLayer) return -1
      })
      
      return this.ObjectGame[this.ObjectGame.indexOf(object)];
    
  },
  /* remove object */
  removeObjectGame: function() {
    this.ObjectGame = this.ObjectGame.filter(object => !object.removeObject);
  },
  /* return array object */
  findObject: function(type) {
    return this.ObjectGame.filter((o) => 'type' in o && o.type === type);
  }
};