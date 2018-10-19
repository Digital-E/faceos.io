import express from 'express';
import axios from 'axios';
import cloudinary from 'cloudinary';

const router = express.Router();

router.get('/', (req,res) => {

  cloudinary.v2.search.expression('')
  .with_field('tags')
  .with_field('context')
  .max_results(1)
  .execute()
  .then((result)=>{
  let data = result.resources;
  let nextCursor = result.next_cursor
  let users = {};
  let list = {};
  users = data.map(i =>({ url: i.url, name: i.context, tags: i.tags}));
  list.users = users;
  list.next = nextCursor;

  console.log(list);

  res.render('home', list);
  });
});

router.get('/next', (req,res) => {



  });


router.post('/ajax-request', (req,res,next) => {

  cloudinary.v2.search.expression('')
  .with_field('tags')
  .with_field('context')
  .max_results(1)
  .next_cursor(req.body.next)
  .execute()
  .then((result)=>{

  let data = result.resources;
  let nextCursor = result.next_cursor
  let users = {};
  let list = {};
  users = data.map(i =>({ url: i.url, name: i.context, tags: i.tags}));
  list.users = users;
  list.next = nextCursor;

  console.log(list.users);
  console.log(list.next);

  res.send(list);
  
  next();
  });

  });

  router.all('/ajax-request', function(req,res) {
    console.log('swag');
    res.render('hometest');
    res.end();
});


//   //Load more results
//
// cloudinary.v2.search.expression('')
// .with_field('tags')
// .with_field('context')
// .next_cursor(result.next_cursor)
// .execute()
// .then((result)=>{
//
// console.log(result);
//
// });


export default router;
