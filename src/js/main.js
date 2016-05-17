

import angular from 'angular';

const url = 'https://secret-forest-21470.herokuapp.com/collections/46544351813a5sdf38asdfa1sd38f1xxx3asdfasd';


// Controllers
import { HomeController } from './controllers/home.controller';

angular
  .module('app', [])
  .constant('URL', url)
  .controller('HomeController', HomeController)
;