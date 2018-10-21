/* GET home page. */
var express = require('express');
var router = express.Router();
var anaSayfa = function(req, res) {
   res.render('mekanlar-liste', { title: 'Anasayfa' });
};

var mekanBilgisi = function(req, res) {
   res.render('mekan-detay', { title: 'Mekan Bilgisi' });
};

var yorumEkle = function(req, res) {
   res.render('yorum-ekle', { title: 'Yorum Ekle' });
};

var mekanEkleSayfasiOlustur = function (req, res) {
  res.render('mekan-ekle', { title:' Yeni Mekan Ekle',
    sayfaBaslik:' Yeni Mekan Ekle',
    hata: req.query.hata
  });
};


	
module.exports = {
	anaSayfa,
	mekanBilgisi,
	yorumEkle};

