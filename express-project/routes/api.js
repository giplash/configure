const faker = require('faker');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('api');
});
heroes = [];
for (let i = 0; i < 20; i++) {
    heroes.push({
        name: faker.name.firstName(),
        description: faker.lorem.paragraph(),
        img: faker.image.avatar(),
        id: i+1
    })
}
router.get('/heroes', (req, res) => {
    res.render('heroes', {heroes: heroes});
})
router.get('/heroes/:id', (req, res) => {
    res.render('hero', {hero: heroes[req.params.id-1]});
})
module.exports = router;