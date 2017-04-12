const jobRouter = require('express').Router();

let allJobs = [
  {id: "1", company: "starbucks", link: "www.starbucks.com", notes: "macchiato person", createTime: "1200"},
  {id: "2", company: "bank of america", link: "www.bofa.com", notes: "rip you off", createTime: "1220"},
  {id: "3", company: "district taco", link: "www.districttaco.com", notes: "queso con chile", createTime: "1245"}
];

jobRouter.get('/', function showJobData(req, res, next) {
  res.json(allJobs);
});


module.exports = jobRouter;
