// IMPORT
const express = require('express');
const axios = require('axios');
const router = express.Router();

const companyName = 'netflix';

router.get(`/getOpenJobsInfos/${companyName}`, async (req, res) => {
    const leverUrl = `https://api.lever.co/v0/postings/${companyName}?mode=json`;
    try {
        const lever = await axios.get(leverUrl);
        const data = lever.data;
        let n = 0;
        data.forEach(element => {
            n++
            return n;
        });
        const jobs = data.map(elmt => {
                elmt = {
                    lever_id: elmt.id,
                    name: elmt.descriptionPlain,
                    department: elmt.categories.department,
                    jobUrl: elmt.hostedUrl,
                    contract: elmt.categories.commitment,
                    team: elmt.team,
                    location: elmt.categories.location,
                    publishedAt: elmt.createdAt
                }
            })
    

        console.log(jobs);

        const filteredData = {
            companyName: companyName,
            endpointLever: leverUrl,
            nbrOpenJob: n,
            openJobs: jobs
        }

        console.log(filteredData);;

    } catch (err) {
        console.error('Erreur :', err);
    }
});

// HOMEPAGE
router.get('/', (req, res) => {
    res.send('Hello World');
})


module.exports = router;