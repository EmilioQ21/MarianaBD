
  const DAYS = [
    { day: 1,  date: "12 de mayo",  text: "bienvenida a tu pagina tipo calendario adviento, todos los dias habra una nueva sorpresita hasta tu cumpleaños, ya sea una cartita o un pase para algun sweet treat, u otras cosas que se me ocurran, espero te guste esta pagina y te sirva para emocionarte y entretenerte un poquito mas por tu cumpleaños, ya que es una fecha muy importante y merece ser festejada como si fuera el unico jijijijija.  Aqui esta la sorpresita de hoy:", image: "https://i.ibb.co/nM7yqfxS/tapiocago.png" },
    { day: 2,  date: "13 de mayo",  text: "Dia 2!, ya solo nos faltan 30 mas i think, quiero tomar este dia para decirte lo mucho que te amo, y estoy muy emocionado por esta cosa que te hice, creo que te gustara bastante las sorpresitas que encontraras por aqui, unas seran mas chill que otras pero estoy seguro de que haran tu dia un poquito mas bonito. El dia de hoy la sorpresita sera un collage de todas las fotos que me has mandado de ti y luna, para recordarte lo almas gemelas que son y que luna seguro esta muy emocionada por tu cumpleaños tambien.", image:"https://lh3.googleusercontent.com/d/1VFTENTyCUoJHjhT3dNXwOOyjr1UlHA0p"},
    { day: 3,  date: "14 de mayo",  text: "Hello hello, pretty pretty, el dia de hoy es jueves, y como que se me antoja bastante sufrir, entonces hoy obtendras algo que siempre has querido, e intentare cumplirlo oh noooooo ", image:"https://lh3.googleusercontent.com/d/18la5Za3X_0XyvLDurnljAwHIFz0VlGKD"},
    { day: 4,  date: "15 de mayo",  text: "Buenos dias/tardes/noches linda depende de a que horas hayas abierto la carta de hoy, hoy es viernes y los viernes me ponen muy feliz, en especial cuando los paso contigo, hay algo tan bonito de terminar la semana y pasar la tarde o el dia completo contigo, realmente hace que valga la pena todo el estres que pudo haber causado la escuela o lo que sea, esa es una de las razones por las que te amo.", spotify: "4QlzkaRHtU8gAdwqjWmO8n" }, 
    { day: 5,  date: "16 de mayo",  text: "Hoy es sabado linda hermosa, que haras hoy? quien sabe para cuando estoy escribiendo esto no se que pasara el sabado 16 de mayo, pero espero tengas un buen dia linda, aqui te dejo una imagen que me gusta mucho de nosotros ya toca hacer skin care again ", image: "https://lh3.googleusercontent.com/d/1TYkLxqpzKYkijREpRSoGZM1PkmhNLaEq" },
    { day: 6,  date: "17 de mayo",  text: "Hoy es domingo guys y los domingos son para no hacer nada, entonces que te parece si no se hace nada hoy y jugamos wordle?", wordle: "https://mywordle.strivemath.com/?word=hiedprzcdlykk" },
    { day: 7,  date: "18 de mayo",  text: "Hoy es lunes and you know what that means guys, hoy caga el aguila (si dios quiere) entonces una pista de lo que se viene", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50223.69596013335!2d-103.46297699350296!3d20.65176029021718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ad267d7e57ab%3A0x1367b516759fe205!2sYogocup%20Plaza%20Xochitl!5e1!3m2!1ses!2smx!4v1777952273293!5m2!1ses!2smx" },
    { day: 8,  date: "19 de mayo",  text: "Martessss, esta es la forma en la que se veia la luna el dia de tu cumpleaños el año pasado, igual de pretty que tu. como me gustaria ver las estrellas contigo algun dia.", image: "https://lh3.googleusercontent.com/d/1-SBLjwmG9qRxh7gUI_kGFEqTKaXddJ__" },
    { day: 9,  date: "20 de mayo",  text: "Miercoles DE YOGOCUP, ya se acabo el semestre, y esta es la ultima semana de vacaciones antes de verano y aunque el proximo semestre vaya a ser muy raro, creo que eventualmente nos acostumbraremos, como siempre jijijijija.",  image: "https://lh3.googleusercontent.com/d/1nAfDKH8u81cDXaBnd2S0tGZ139VwVowv"}, 
    { day: 10, date: "21 de mayo",  text: "Otro jueves mas, puedes creer que ya van 10 dias de este regalin previo a tu cumpleaños, para este momento espero ya tener una idea de lo que te voy a regalar (seguramente si) preguntame a ver si ya se para no decirte ;)" , image: "https://lh3.googleusercontent.com/d/1GM9GxeqohxFJqxd_FAjfjoRDUm1P0yoh" },
    { day: 11, date: "22 de mayo",  text: "Another friday and guess what, es fin de semana de F1, remember cuando fuiste a la F1? una de mis metas y sueños contigo es ir a algun GP juntos, yo se que algun dia lo haremos linda bonita, we just have to wait jijijija", image: "https://lh3.googleusercontent.com/d/1Wa-wXCBSUviOVSTgDndVZqRVhlhNjL-E" },
    { day: 12, date: "23 de mayo",  text: "omg es dia de qualy y kimi antonelli se acaba de sacar la pole position, no lo puedo fakin creer. Anyways como va tu sabado bonito pretty? espero que relajandote antes de entrar a verano, espero hayas podido meter tu materia de solid jiji. Si no toco revolear el papoi ", video: "lyVBFPJQ0KQ"},
    { day: 13, date: "24 de mayo",  text: "Dominguito de chill, que haras hoy? estaria padre si estuvieramos juntos hoy, hare que eso pueda ocurrir si dios quiere jijijji. Aqui otra fotito que me encanta de nosotros. me encanta que seas mi mejor amiga linda, me la paso increible contigo", image: "https://lh3.googleusercontent.com/d/1t1fqNig4ouGcCpI0ZtIPapp-aXD3JJAd" },
    { day: 14, date: "25 de mayo",  text: "Lunes y adivina que, ya estamos de vuelta en la escuela tristemente, y te acuerdas como hablamos de ir al gym? bueno si si fuimos aqui hay una sorpresita for you ", image: "https://lh3.googleusercontent.com/d/13zq8HiHl2zZc2gr6EXth4K9iL8uowPDF" },
    { day: 15, date: "26 de mayo",  text: "Hoy es un dia de chill de datos curiosos, entonces este es el dato curioso: Hoy 26 de mayo es el dia internacional de los avioncitos de papel, te puedo apostar a que no sabias eso jijijijija, un dia hagamos una date de avioncitos y me los lanzas en la cara, yo creo que te gano porque yo era experto haciendolos en primaria 🖤", image: "https://lh3.googleusercontent.com/d/1IMk3-JVY7IJu303oGlTmCZI3haOgfeAE" },
    { day: 16, date: "27 de mayo",  text: "el dia en el que estoy escribiendote esto (05 de mayo) fue un dia muy bonito, tuvimos dia libre entonces fuimos por tapioca, despues fuimos a mi casa y vimos traitors, despues hicimos un cafe y otras cosas, y en cuanto menos me lo espere el dia ya se habia acabado, no se si es porque todo esto acaba de pasar pero me siento triste de que ya se acabo el dia. Me hizo falta mas de ti linda bonita, realmente amo estos dias contigo, son dias que ya pueden parecer rutinarios pero que se que atesorare por toda mi vida, gracias por venir a comer a mi casa linda bonita, te amo mucho. (foto de lo que me pusiste cuando regrese a mi casa)", image: "https://lh3.googleusercontent.com/d/17GueJWI2H-_ECJJZb18T51dnCEruZ1T2" },
    { day: 17, date: "28 de mayo",  text: "Hoy es jueves y se que puede ser estresante volver a la escuela, o a veces simplemente estas estresada o lo que sea. De igual manera me encontre esta pagina hace poco y me parece muy relajante, no se que tanto te guste la meditación pero creo que es una forma padre de ver que tus problemas son momentaneos y en el gran orden de las cosas todo pasa. Te amo mucho linda, i hope you like this", link: "https://pixelthoughts.co/" },
    { day: 18, date: "29 de mayo",  text: "Viernes llego primer semana de verano in school, y te hice esta playlist, una playlist con 20 canciones que me recuerdan a ti y a nosotros. Ya hacia tiempo que no te hacia una y me gusta pues elijo cada cancion pensando en la letra y como nos representa. espero te guste linda:", playlist: "1azKK85mAhTmvY6ugp3QG2" },
    { day: 19, date: "30 de mayo",  text: "Hoy es 30 de mayo, solo queda hoy y mañana en este mes y seguro ya empieza a cansar puros mensajes mios entonces mejor que los escuches de personas que conoces  VIen :) ", driveVideo: "1n2aBYl_KTgtULi_LzARi-a49b71jqJ4f" }, //VIOLETA DONE
    { day: 20, date: "31 de mayo",  text: "Ultimo dia de mayo, mañana ya sera el mes de tu cumpleaños, quiero que tengas un increible cumpleaños linda y recordarte que tienes mucha gente que te ama, empezando desde ayer, cada dia tendras un mensaje de una de ellas :)", driveVideo: "1n2aBYl_KTgtULi_LzARi-a49b71jqJ4f" }, //DANNA
    { day: 21, date: "1 de junio",  text: "Primer dia de JUNE!!, y que mejor manera de empezar el mes con un mensaje de Sofi :OO", driveVideo: "1n2aBYl_KTgtULi_LzARi-a49b71jqJ4f" }, //SOFI
    { day: 22, date: "2 de junio",  text: "Te gustaron las apariciones especiales en esta pagina tan extraña? jijijijia bueno pausamos rapido esta sección que tengo un anuncio muy importante para ti!!!", image: "https://lh3.googleusercontent.com/d/1pnRyDmdr-M-Vu3E8Y5328BsQOvpm07Ok" }, //Mercado rosa
    { day: 23, date: "3 de junio",  text: "el 3 de junio tambien es conocido como el dia en el que Nat le manda un mensaje a Mariana, so here it is jijijijija", driveVideo: "1n2aBYl_KTgtULi_LzARi-a49b71jqJ4f" }, //NAT
    { day: 24, date: "4 de junio",  text: "Omg ya muchos mensajes ya me toca hablar a mi verdad? pues no chicos aqui hay un mensaje de Ximena: ", driveVideo: "1n2aBYl_KTgtULi_LzARi-a49b71jqJ4f" }, //XIMENA
    { day: 25, date: "5 de junio",  text: "Bueno, se acaba la tanda de mensajes de gente que te ama, hoy es el ultimo dia, espero te haya gustado linda y como ya es el ultimo mensaje pues quiero cerrar fuerte entonces aqui un mensaje de Karla :O", driveVideo: "1xaShOJYhvzv2GcjoSZEYHMyc2f3gZlMO"}, //Karla DONE
    { day: 26, date: "6 de junio",  text: "Hoyyyyyy es 6 y si le sumamos otros 6 a hoy ya sera tu cumpleañooooooos, hoy es sabadito entonces talvez sea hoy el dia del mercado rosa omg, o talvez mañana dependiendo en lo que hayamos acordado jijijiji, pero bueno para alegrarte el dia aqui una foto de tu #1 fan", image: "https://lh3.googleusercontent.com/d/1YzS6upiwmSejtQRZFZFA48VFWPc4FZVb" },
    { day: 27, date: "7 de junio",  text: "Ayer fue 6 y hoy es 7 jaja entiendes jaja. Te amo demasiado, mañana ya seran los ultimos 5 dias de esta pagina y espero de todo corazón que te haya gustado, en esta ocasion fueron 1 mes de sorpresas pero no se compara nada con casi 2 años de felicidad diaria que me das, gracias linda por hacerme tan feliz y hacerme sentir tan querido. Quiero que este cumpleaños sea muy memorable para ti, 20 no es cualquier numero y mereces voltear atras a este cumpleaños y sentir bonito por lo padre que fue. ", driveVideo: "15HJTsinh0HWxqLbiSFQuxWRw8bR7jQ0e" },
    { day: 28, date: "8 de junio",  text: "ultimo LUNES antes de tu cumpleaños, no se si para este punto ya me preguntaste que te voy a regalar, pero si bien aprendi es no decirte nada jijijijijijaaa tendras que esperar 4 dias mas ;) pero bueno para compensar que te parece otra tapioca", image: "https://lh3.googleusercontent.com/d/1P-hVd3ecZt4rAeZs-rJM8bvLa_vyHNeq" },
    { day: 29, date: "9 de junio",  text: "Omg ya solo faltan 3 dias, nunca te has preguntado cuales son las estadisticas de tu vida? yo si y te tengo la respuesta en esta pagina que me encontre, es bastante interesante la verdad, so just a lil fun page para pasar el tiempo, ", external: "https://neal.fun/life-stats/" },
    { day: 30, date: "10 de junio", text: "FELIZ MESIVERSARIO PRETTY GIRLLLLL hoy es un dia muyyyy especial porque hoy es el ultimo mesiversario antes de nuestro 2do ANIVERSARIO, nada mas escribirlo y pensarlo me hace sonreir, no puedo creer que ya casi son 2 años, se han pasado tan rapido, los mejores 2 años de mi vida sin duda (Esta imagen muestra por que son los mejores 2 años). La sorpresita hoy sera en fisico, espero poder dartela hoy pero yo creo que chi. Feliz mesiversario linda te amo demasiado no puedo esperar al proximo mes", image: "https://lh3.googleusercontent.com/d/1Q5_wQAUeoq6QhMMqfCo5lWeiJIFFjuul" },
    { day: 31, date: "11 de junio", text: "Y asi es como llegamos al 11 de junio, un dia antes de tu increible y hermoso cumpleaños, mañana tocara comer mucho pastel y soplar las velas jiji. No puedo creer lo rapido que se pasaron los dias, sin duda fue muy divertido ver como abres cada dia esta pagina esperando a ver que ocurre. Te amo mucho linda, hoy es momento de relajarse antes de tu gran día. Mañana ya podras ver que te regale jijijijijijja" },
    { day: 32, date: "12 de junio", text: "FELIZ CUMPLEAÑOS PRETTYYYYYYYYYYYY, es hora de que soples las velas de tu pastel y pidas un deseo, te amo mucho linda, 20 añotes jiji, te espera un gran año lleno de exito y felicidad linda, te amo mucho nunca lo olvides 🖤" },
  ];



  const START = new Date('2026-05-12T06:00:00Z');

  function getDayIndex() {
    const now = new Date();
    return Math.floor((now - START) / (1000 * 60 * 60 * 24));
  }

  function formatDate(d) {
    return d.toLocaleDateString('es-MX', { weekday: 'long', day: 'numeric', month: 'long' });
  }

  function init() {
    const idx = getDayIndex();
    const now = new Date();
    document.getElementById('dateLabel').textContent = formatDate(now);

    if (idx < 0) {
      document.getElementById('envelopeWrap').style.display = 'none';
      const lm = document.getElementById('lockedMsg');
      lm.style.display = 'block';
      lm.textContent = 'Not yet guys jiji';
      return;
    }

    if (idx >= DAYS.length) {
      document.getElementById('envelopeWrap').style.display = 'none';
      const lm = document.getElementById('lockedMsg');
      lm.style.display = 'block';
      lm.textContent = 'Ya abriste tus cartas jijijijijas. Te quiero mucho 🖤';
      return;
    }

    const entry = DAYS[idx];
    const key = `opened_day_${idx}`;

    if (localStorage.getItem(key) === 'true') {
      document.getElementById('hint').textContent = 'Ya abriste tu carta de hoy 🖤';
      document.getElementById('envelope').classList.add('open');
      document.getElementById('envelope').style.cursor = 'default';
      setTimeout(() => showLetter(entry), 600);
    }
  }

  function openEnvelope() {
    const idx = getDayIndex();
    if (idx < 0 || idx >= DAYS.length) return;

    const env = document.getElementById('envelope');
    if (env.classList.contains('open')) return;

    env.classList.add('open');
    env.style.cursor = 'default';
    document.getElementById('hint').textContent = 'Ya abriste tu carta de hoy 🖤';
    localStorage.setItem(`opened_day_${idx}`, 'true');

    setTimeout(() => showLetter(DAYS[idx]), 800);
  }

  function showLetter(entry) {
  document.getElementById('letterDay').textContent = `Día ${entry.day} · ${entry.date}`;
  document.getElementById('letterBody').textContent = entry.text;

  const img = document.getElementById('letterImage');
  if (entry.image) {
    img.src = entry.image;
    img.alt = `Foto día ${entry.day}`;
    img.style.display = 'block';
  } else {
    img.style.display = 'none';
    img.src = '';
  }

  const wordle = document.getElementById('letterWordle');
if (entry.wordle) {
  wordle.src = entry.wordle;
  wordle.style.display = 'block';
} else {
  wordle.style.display = 'none';
  wordle.src = '';
}

const video = document.getElementById('letterVideo');
if (entry.video) {
  video.src = `https://www.youtube.com/embed/${entry.video}`;
  video.style.display = 'block';
} else {
  video.style.display = 'none';
  video.src = '';
}

const map = document.getElementById('letterMap');
if (entry.map) {
  map.src = entry.map;
  map.style.display = 'block';
} else {
  map.style.display = 'none';
  map.src = '';
}

const link = document.getElementById('letterLink');
if (entry.link) {
  link.src = entry.link;
  link.style.display = 'block';
} else {
  link.style.display = 'none';
  link.src = '';
}

  
  const iframe = document.getElementById('letterSpotify');
  if (entry.spotify) {
    iframe.src = `https://open.spotify.com/embed/track/${entry.spotify}`;
    iframe.style.display = 'block';
  } else {
    iframe.style.display = 'none';
    iframe.src = '';
  }

  const spotifyPlay = document.getElementById('letterPlaylist');
  if (entry.playlist) {
    spotifyPlay.src = `https://open.spotify.com/embed/playlist/${entry.playlist}`;
    spotifyPlay.style.display = 'block';
  } else {
    spotifyPlay.style.display = 'none';
    spotifyPlay.src = '';
  }

  const driveVideo = document.getElementById('driveVideo');
  if (entry.driveVideo) {
    driveVideo.src = `https://drive.google.com/file/d/${entry.driveVideo}/preview`;
    driveVideo.style.display = 'block';
  } else {
    driveVideo.style.display = 'none';
    driveVideo.src = '';
  }


  const externalBtn = document.getElementById('externalBtn');

if (entry.external) {
  externalBtn.style.display = 'inline-block';

  externalBtn.onclick = () => {
    window.open(entry.external, '_blank');
  };

} else {
  externalBtn.style.display = 'none';
}

  document.getElementById('letterOverlay').classList.add('visible');


  const cakeContainer = document.getElementById('cakeContainer');
if (entry.day === 32) {
  cakeContainer.style.display = 'block';
  // resetear velas por si ya las sopló antes
  for (let i = 1; i <= 5; i++) {
    ['flame','flameInner'].forEach(prefix => {
      const el = document.getElementById(`${prefix}${i}`);
      if (el) { el.style.opacity = '1'; el.style.transition = ''; }
    });
  }
  document.getElementById('cakeMsg').textContent = '';
  document.getElementById('birthdayCake').style.cursor = 'pointer';
} else {
  cakeContainer.style.display = 'none';
}
}

function closeLetter() {
  document.getElementById('letterOverlay').classList.remove('visible');
}


function blowCandles() {
  const ids = ['flame1','flame2','flame3','flame4','flame5','flameInner1','flameInner2','flameInner3','flameInner4','flameInner5'];
  const order = [0,1,2,3,4]; // índice de las velas (0-4)
  let blown = 0;

  const svg = document.getElementById('birthdayCake');
  if (svg) svg.style.cursor = 'default';

  order.forEach((i, step) => {
    setTimeout(() => {
      const flame = document.getElementById(`flame${i+1}`);
      const inner = document.getElementById(`flameInner${i+1}`);
      if (flame) { flame.style.opacity = '0'; flame.style.transition = 'opacity 0.3s'; }
      if (inner) { inner.style.opacity = '0'; inner.style.transition = 'opacity 0.3s'; }
      blown++;
      if (blown === order.length) {
        const msg = document.getElementById('cakeMsg');
        if (msg) msg.textContent = 'Espero que tu deseo se haga realidad, Te amo mucho 🖤';
      }
    }, step * 280);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('closeBtn').addEventListener('click', closeLetter);
  document.getElementById('letterOverlay').addEventListener('click', function(e) {
    if (e.target === this) closeLetter();
  });
  init();
});




