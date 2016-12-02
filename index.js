var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
app.listen(3000, function() {
    console.log('listening on port 3000');
});
const crunch = [{
    id: 0,
    url: 'https://yt3.ggpht.com/-Dq13f9OxQnY/AAAAAAAAAAI/AAAAAAAAAAA/mbXw6bn5Nx0/s900-c-k-no-mo-rj-c0xffffff/photo.jpg'

},
{
    id: 1,
    url: 'https://pbs.twimg.com/profile_images/694611645453225985/CkQYaRYo.jpg'
    },
{
    id: 2,
    url: 'http://www.harrisremovals.co.uk/wp-content/uploads/2014/07/Crunch-time-in-the-removals-game.jpg'
},
{
    id: 3,
    url: 'http://www.nestlecrunch.com/images/about_crunch_bar_426x185.png'

},
{
    id: 4,
    url: 'https://i.ytimg.com/vi/_M2Etme-tfE/maxresdefault.jpg'

},
{
    id: 5,
    url: 'http://www.crunchpak.com/wp-content/themes/crunchpak/images/crunch-pak-products.png'

},
{
    id: 6,
    url: 'https://crunch.apache.org/img/LITTLE_CRUNCH.png'

},
{
    id: 7,
    url: 'http://www.capncrunch.com/assets/img/products/front/peanut-butter-crunch.jpg '

}];

app.get('/crunch', function(req, res, next) {
    var random = Math.floor((Math.random() * crunch.length));
    console.log(random);
    res.json(crunch[random]);
});
