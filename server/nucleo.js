require('dotenv/config');

const puppeteer = require('puppeteer');
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const tf = require('@tensorflow/tfjs');
const tfvis = require('@tensorflow/tfjs-vis');
const brain = require('brain.js');

(async () => {
  //machineLearning()
  const browser = await puppeteer.launch({
    ignoreHTTPSErrors: true,
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto('https://open.spotify.com/');
  await page.setViewport({
    width: 1920,
    height: 1080,
  });
  await page.screenshot({ path: 'screenshot.png' });
  page.click(
    '#main > div > div.Root__top-container > div.Root__top-bar > header > div:nth-child(5) > button._3f37264be67c8f40fa9f76449afdb4bd-scss._1f2f8feb807c94d2a0a7737b433e19a8-scss'
  );
  await page.waitForSelector('#login-username');
  await page.type('#login-username', process.env.LOGIN);
  await page.type('#login-password', process.env.SENHA);
  await page.click('#login-button');
  await page.waitForSelector(
    '#main > div > div.Root__top-container > div.Root__nav-bar > nav > div.Rootlist > div > div > div:nth-child(3) > a'
  );
  await page.goto('https://open.spotify.com/collection/tracks');
  var index;
  var vetMusTemp = [[]];
  await page.waitForSelector(
    'html > body > div:nth-of-type(4) > div > div:nth-of-type(2) > div:nth-of-type(4) > main > div > div:nth-of-type(2) > div > div > div:nth-of-type(2) > section > div:nth-of-type(4) > div > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(' +
      1 +
      ') > div > div > div:nth-of-type(2) > div > div > span > span'
  );

  try {
    for (index = 1; index != 0; index++) {
      vetMusTemp[index] = await page.evaluate(async (index) => {
        return await new Promise((resolve) => {
          // <-- return the data to node.js from browser
          var music = document.querySelector(
            'html > body > div:nth-of-type(4) > div > div:nth-of-type(2) > div:nth-of-type(4) > main > div > div:nth-of-type(2) > div > div > div:nth-of-type(2) > section > div:nth-of-type(4) > div > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(' +
              index +
              ') > div > div > div:nth-of-type(2) > div > div > span > span'
          ).textContent;
          var artist = document.querySelector(
            'html > body > div:nth-of-type(4) > div > div:nth-of-type(2) > div:nth-of-type(4) > main > div > div:nth-of-type(2) > div > div > div:nth-of-type(2) > section > div:nth-of-type(4) > div > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(' +
              index +
              ') > div > div > div:nth-of-type(2) > div > span > a:nth-of-type(1)  > span > span'
          ).textContent;

          console.log(music, artist);
          resolve([music, artist]);
        });
      }, index);
    }
  } catch {
    console.log('fim da lista', index);
    index = -1;
  }

  console.log(vetMusTemp);
  var x = 0;
  var anterior;
  var ola;
  var generos;
  var strGeneros = [];
  var vetStrGeneros = [];
  var verificaPula = [false];
  var verificaChamaML = false;
  var verificaTimeOut = [];
  var gurdax = 0;
  consultaApi();
  function consultaApi() {
    console.log(anterior, x);
    console.log(vetMusTemp.length);
    if (x >= vetMusTemp.length - 2) {
      if (verificaChamaML == false) {
        console.log(vetStrGeneros);
        verificaChamaML = true;
        machineLearning(vetStrGeneros);
      }
      return;
    }
    const Http = new XMLHttpRequest();
    console.log(vetMusTemp[x + 1]);
    const url =
      'http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=5c218597a7e7f368b95c71b34a21f546&artist=' +
      vetMusTemp[x + 1][1] +
      '&track=' +
      vetMusTemp[x + 1][0].split('-')[0].trimEnd() +
      '&format=xml';
    Http.open('POST', url), false;
    console.log(url);
    console.log('pimba');
    Http.send();
    Http.onreadystatechange = function () {
      if (Http.readyState == 4 && Http.status == 200) {
        ola = Http.responseText;
        try {
          var toptags = ola.split('toptags>');
          generos = toptags[1].split('</name>');
          for (var y = 0; y < generos.length; y++) {
            strGeneros[y] = generos[y].split('<name>')[1];
          }
        } catch {
          console.log('musica não encontrada');
        }
        vetStrGeneros.push(strGeneros);
        strGeneros = [];
        console.log('x:' + x);
        console.log(strGeneros);
        console.log(vetStrGeneros[x]);
        console.log(vetStrGeneros);
        resolve(strGeneros);
      }
    };
    function resolve() {
      console.log(strGeneros);
      verificaPula[x] = true;
      x++;
      consultaApi();
    }
  }

  async function machineLearning(vetStrGeneros) {
    var generos = [];
    var z = 0;
    for (x = 0; x <= vetStrGeneros.length - 1; x++) {
      if (vetStrGeneros[x] == undefined) {
        vetStrGeneros[x] = 0;
      }
      for (y = 0; y <= vetStrGeneros[x].length - 1; y++) {
        if (vetStrGeneros[x][y] != undefined) {
          generos[z] = vetStrGeneros[x][y];
          z++;
        }
      }
    }
    console.log(generos);
    var count = [0];
    for (x = 0; x <= generos.length; x++) {
      for (y = 0; y <= generos.length; y++) {
        if (y != x) {
          if (generos[x] == generos[y]) {
            if (count[x] == undefined) {
              count[x] = 0;
            }
            count[x]++;
          }
        }
      }
    }
    console.log(count);
    var topGen = [];
    var posTopGen = [];
    var jaFoi = 0;
    for (z = 0; z < 3; z++) {
      for (x = 0; x <= count.length - 2; x++) {
        for (y = 0; y <= count.length - 2; y++) {
          if (count[x] >= count[y]) {
            var teste = topGen[z];
            if (count[x] >= topGen[z] || topGen[z] == undefined) jaFoi = 0;
            for (a = 0; a < 3; a++) {
              if (posTopGen[a] == x) {
                jaFoi = 1;
              }
            }
            if (jaFoi == 0) {
              topGen[z] = count[x];
              posTopGen[z] = x;
            }
          }
        }
      }
    }

    const browser2 = await puppeteer.launch({
      ignoreHTTPSErrors: true,
      headless: false,
    });
    const page2 = await browser2.newPage();
    await page2.goto(
      'https://www.personality-database.com/subcategory/4704/music-genres-genres-rock-mbti-personality-type'
    );
    await page2.setViewport({
      width: 1920,
      height: 1080,
    });
    await page2.waitForSelector('#list-size');
    await page2.select('#list-size', '250');
    await page2.waitForSelector(
      'html > body > div > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(2) > div:nth-of-type(1) > div > div:nth-of-type(3) > div:nth-of-type(' +
        200 +
        ') > a > div > div:nth-of-type(2) > div:nth-of-type(1) > span > h4'
    );
    vetGenPer = [];
    try {
      for (index = 1; index <= 210; index++) {
        console.log(index);
        try {
          vetGenPer[index] = await page2.evaluate(async (index) => {
            return await new Promise((resolve) => {
              // <-- return the data to node.js from browser
              console.log(index);
              console.log('ola');
              var perso = document.querySelector(
                'html > body > div > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(2) > div:nth-of-type(1) > div > div:nth-of-type(3) > div:nth-of-type(' +
                  index +
                  ') > a > div > div:nth-of-type(2) > div:nth-of-type(1) > span > h4'
              ).textContent;
              console.log('ola2');
              var genero = document.querySelector(
                'html > body > div > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(2) > div:nth-of-type(1) > div > div:nth-of-type(3) > div:nth-of-type(' +
                  index +
                  ') > a > div > div:nth-of-type(2) > div:nth-of-type(3) > p'
              ).textContent;

              console.log(genero, perso);
              resolve([genero, perso]);
            });
          }, index);
        } catch {
          console.log('ERRO DE LEITURA, LINHA PULADA:' + index);
        }
      }
    } catch {
      console.log('fim da lista', index);
      index = -1;
    }
    console.log(topGen);
    var alvo = [
      generos[posTopGen[0]],
      generos[posTopGen[1]],
      generos[posTopGen[2]],
    ];

    const net = new brain.recurrent.LSTM();
    var trainingData = [{ input: '', output: '' }];
    for (p = 1; p < vetGenPer.length; p++) {
      console.log('ola:::' + p);
      if (vetGenPer[p] != undefined) {
        trainingData.push({ input: vetGenPer[p][0], output: vetGenPer[p][1] });
      }
    }
    trainingData.shift();
    console.log(trainingData);
    net.train(trainingData, {
      iterations: 70,
      log: (detail) => console.log(detail),
    });

    const result = net.run(alvo);

    console.log('a personalidade deste usuario provavelmente é:' + result); // 'a'
  }
})();
