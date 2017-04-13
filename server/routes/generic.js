const jobRouter = require('express').Router();

let allJobs = [
  {id: "1", company: "starbucks", link: "www.starbucks.com", notes: "macchiato person", createTime: "1200"},
  {id: "2", company: "bank of america", link: "www.bofa.com", notes: "rip you off", createTime: "1220"},
  {id: "3", company: "district taco", link: "www.districttaco.com", notes: "queso con chile", createTime: "1245"}
];

jobRouter.get('/', function showJobData(req, res, next) {
  let output = [];
  allJobs.forEach(function(job){
    output.push({id:job.id, company:job.company, link: job.link});
  });
  res.json(output);
});

let newId =(allJobs.length + 1).toString(); //this is not a good way to do this 
let now = new Date();
console.log(now);

function addAJob(req, res, next){
  let newJob = {
    id: newId,
    company: req.body.company,
    link: req.body.link,
    notes: req.body.notes,
    createTime: now
  };

  allJobs.push(newJob);
  console.log(newJob);
  res.json({message: 'I added it!', newJob: req.body.newJob});
}

jobRouter.post('/', addAJob);



module.exports = jobRouter;
