/* GET home page. */
var express = require('express');
var router = express.Router();
var hakkinda = function(req,res){
res.render('hakkinda',{title:'Hakkinda'});
}

module.exports.mekanEkle = function(req, res){
  res.render('mekanEkle', { title: 'Yeni Mekan Ekle',
adminMetin2:'MekanBul'});
};


module.exports = {hakkinda};