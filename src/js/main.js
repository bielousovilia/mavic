import adaptiv from './modules/adaptiv';
import menu from './modules/menu';
import tabs from './modules/tabs';
import scrolling from './modules/scrolling';

window.addEventListener('DOMContentLoaded', main);

function main() {
  'use strict';
  menu();
  tabs('.questions__item-title');
  adaptiv();
  scrolling('.scroll__page');
}