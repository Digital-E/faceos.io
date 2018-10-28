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
  let totalCount = result.total_count;

  users = data.map(i =>({ url: i.url, name: i.context, tags: i.tags}));
  list.users = users;
  list.next = nextCursor;
  list.totalCount = totalCount;

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
  let totalCount = result.total_count;

  users = data.map(i =>({ url: i.url, name: i.context, tags: i.tags}));
  list.users = users;
  list.next = nextCursor;
  list.totalCount = totalCount;

  res.send(list);


  next();

    });
  });

  router.post('/ajax-category1', (req,res,next) => {

    cloudinary.v2.search.expression('category1')
    .with_field('tags')
    .with_field('context')
    .max_results(2)
    .execute()
    .then((result)=>{

    let data = result.resources;
    let nextCursor = result.next_cursor
    let users = {};
    let list = {};
    let totalCount = result.total_count;

    users = data.map(i =>({ url: i.url, name: i.context, tags: i.tags}));
    list.users = users;
    list.next = nextCursor;
    list.totalCount = totalCount;


    res.send(list);


    next();
    });
  });

  router.post('/ajax-category2', (req,res,next) => {

    cloudinary.v2.search.expression('category2')
    .with_field('tags')
    .with_field('context')
    .max_results(2)
    .execute()
    .then((result)=>{

    let data = result.resources;
    let nextCursor = result.next_cursor
    let users = {};
    let list = {};
    let totalCount = result.total_count;

    users = data.map(i =>({ url: i.url, name: i.context, tags: i.tags}));
    list.users = users;
    list.next = nextCursor;
    list.totalCount = totalCount;


    res.send(list);


    next();
    });
  });

  router.post('/ajax-category3', (req,res,next) => {

    cloudinary.v2.search.expression('category3')
    .with_field('tags')
    .with_field('context')
    .max_results(2)
    .execute()
    .then((result)=>{

    let data = result.resources;
    let nextCursor = result.next_cursor
    let users = {};
    let list = {};
    let totalCount = result.total_count;

    users = data.map(i =>({ url: i.url, name: i.context, tags: i.tags}));
    list.users = users;
    list.next = nextCursor;
    list.totalCount = totalCount;


    res.send(list);


    next();
    });
  });

  router.post('/ajax-category4', (req,res,next) => {

    cloudinary.v2.search.expression('category4')
    .with_field('tags')
    .with_field('context')
    .max_results(2)
    .execute()
    .then((result)=>{

    let data = result.resources;
    let nextCursor = result.next_cursor
    let users = {};
    let list = {};
    let totalCount = result.total_count;

    users = data.map(i =>({ url: i.url, name: i.context, tags: i.tags}));
    list.users = users;
    list.next = nextCursor;
    list.totalCount = totalCount;


    res.send(list);


    next();
    });
  });

  router.post('/ajax-reset', (req,res,next) => {

    cloudinary.v2.search.expression('')
    .with_field('tags')
    .with_field('context')
    .max_results(2)
    .execute()
    .then((result)=>{

    let data = result.resources;
    let nextCursor = result.next_cursor
    let users = {};
    let list = {};
    let totalCount = result.total_count;

    users = data.map(i =>({ url: i.url, name: i.context, tags: i.tags}));
    list.users = users;
    list.next = nextCursor;
    list.totalCount = totalCount;


    res.send(list);


    next();
    });
  });

  router.all('/ajax-request', function(req,res) {
    res.end();
});


export default router;
