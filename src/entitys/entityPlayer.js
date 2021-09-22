import { global } from '../global.js';

import {default as Entity} from './entity.js';

export default class EntityPlayer extends Entity {
  constructor( x, y, size, img ) {
    super( x, y, size, img);
    this.type = "player";
  };
};

export function SpawPlayer(x, y, size, img){
  global.addObjectGame( new EntityPlayer(x, y, size, img));
};