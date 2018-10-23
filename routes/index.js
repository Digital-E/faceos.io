import express from 'express';
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

  res.render('home', list);
  });
});


router.post('/ajax-loadmore', (req,res,next) => {

  cloudinary.v2.search.expression('')
  .with_field('tags')
  .with_field('context')
  .max_results(2)
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


  res.send(list);


  next();
  });

  });

  router.all('/ajax-request', function(req,res) {
    res.end();
});


export default router;
