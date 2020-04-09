const table = "topics"
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex(table).del()
    .then(function () {
      // Inserts seed entries
      return knex(table).insert([
        { id: 1, topics: 'CORS', presenter: 'diojfx', url: 'https://19yw4b240vb03ws8qm25h366-wpengine.netdna-ssl.com/wp-content/uploads/What-is-CORS-.png', description: 'eif' },
        { id: 2, topics: 'Common Sorting algorithms', presenter: 'diojfx', url: 'https://res.cloudinary.com/practicaldev/image/fetch/s--kA5hL_Ef--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://siderite.dev/Posts/files/Sorting_637149807996331781.png', description: 'eif' },
        { id: 3, topics: 'SQL Injection attack', presenter: 'diojfx', url: 'https://www.getastra.com/blog/wp-content/uploads/2017/05/xsql-injection-2-650x350.png.pagespeed.ic.UdZjd3jX0J.webp', description: 'eif' },
        { id: 4, topics: 'Lodash', presenter: 'diojfx', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Lodash.svg/440px-Lodash.svg.png', description: 'eif' },
        { id: 5, topics: 'Cross Site Scripting', presenter: 'diojfx', url: 'https://dpsvdv74uwwos.cloudfront.net/statics/img/ogimage/cross-site-scripting-xss.jpg', description: 'eif' },
        { id: 6, topics: 'CouchDB', presenter: 'diojfx', url: 'https://hackernoon.com/hn-images/1*B8eCC-5y_MvtJXfp3TqVsw.png', description: 'eif' },
        { id: 7, topics: 'Heartbleed', presenter: 'diojfx', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Heartbleed.svg/360px-Heartbleed.svg.png', description: 'eif' },
        { id: 8, topics: 'Semantic UI', presenter: 'diojfx', url: 'https://www.pngfuel.com/free-png/wmcgv', description: 'eif' },
        { id: 9, topics: 'Linus Torvalds', presenter: 'diojfx', url: 'https://i.pcmag.com/imagery/articles/04YGKmUR4kalhELBkVuuviO-1.fit_scale.size_2698x1517.v1569488622.png', description: 'eif' },
        { id: 10, topics: 'Angular', presenter: 'diojfx', url: 'https://cdn.worldvectorlogo.com/logos/angular-icon.svg', description: 'eif' },
        { id: 11, topics: 'Fundamentals of Encryption', presenter: 'diojfx', url: 'https://engineering.fb.com/wp-content/uploads/2019/05/SecHero.jpg', description: 'eif' },
        { id: 12, topics: 'Ada Lovelace', presenter: 'diojfx', url: 'https://i.pinimg.com/236x/14/f3/3d/14f33d19596a951418deb3fe98fa4303--smart-people-computer-science.jpg', description: 'eif' },
        { id: 13, topics: 'Ken Thompson', presenter: 'diojfx', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Ken_Thompson_%28sitting%29_and_Dennis_Ritchie_at_PDP-11_%282876612463%29.jpg/440px-Ken_Thompson_%28sitting%29_and_Dennis_Ritchie_at_PDP-11_%282876612463%29.jpg', description: 'eif' },
        { id: 14, topics: 'Alan Turing', presenter: 'diojfx', url: 'https://i.dailymail.co.uk/i/pix/2018/01/07/10/47D85C4400000578-0-image-a-9_1515321060322.jpg', description: 'eif' },
        { id: 15, topics: 'SQL joins', presenter: 'diojfx', url: 'https://www.dofactory.com/Images/sql-joins.png', description: 'eif' },
        { id: 16, topics: 'Secure Scuttlebutt', presenter: 'diojfx', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Hermies.png/440px-Hermies.png', description: 'eif' },
        { id: 17, topics: 'Map and Set', presenter: 'diojfx', url: 'https://miro.medium.com/max/1400/1*HmXTMmVps1oJ7MU-odCpUA.jpeg', description: 'eif' },
      ])
    })
};
