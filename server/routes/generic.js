const jobRouter = require('express').Router();

let allJobs = [
  {id: "1", company: "starbucks", link: "www.starbucks.com", notes: "macchiato person", createTime: "1200"},
  {id: "2", company: "bank of america", link: "www.bofa.com", notes: "rip you off", createTime: "1220"},
  {id: "3", company: "district taco", link: "www.districttaco.com", notes: "queso con chile", createTime: "1245"}
];

/**
 * Returns thr id company, and link object keys by looping thrrough the data
 * @type {Array}
 */
jobRouter.get('/', function showJobData(req, res, next) {
  //add error handling
    let output = [];
  res.json(allJobs.map(function(job){
        return{
            id: job.id,
            company: job.company,
            link: job.link
        };
    }));
});


/**
 * Takes job data and pushs it to the allJobs array.
 * @param {Object}   req  Request argument
 * @param {Object}   res Response argument
 * @param {Function} next
 */
function addAJob(req, res, next) {
    let now = new Date();
    console.log(now);
    let newId = (allJobs.length + 1).toString();
    let newJob = {
        id: newId,
        company: req.body.company,
        link: req.body.link,
        notes: req.body.notes,
        createTime: now
    };

    allJobs.push(newJob);
    console.log(newJob);

    res.json({
        message: 'Job added',
        newJob: req.body.newJob
    });

}

jobRouter.post('/', addAJob);

module.exports = jobRouter;
