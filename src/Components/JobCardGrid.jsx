import React, { useEffect, useState } from 'react'
import JobCard from './JobCard'

const JobCardGrid = () => {

    const [jobdata, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchApi() {
        setLoading(true);
        setError(null);
        const url = 'https://jsearch.p.rapidapi.com/search?query=developer%20jobs%20in%20chicago&page=1&num_pages=1&country=us&date_posted=all';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'd82df5bee9mshbe00db43834da46p1aa9fcjsn73f9ab91e71d',
                'x-rapidapi-host': 'jsearch.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            return result;
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchApi().then(apiResult => {
            if (apiResult && Array.isArray(apiResult.data)) {
                setData(apiResult.data);
            } else {
                setData([]);
            }
        });
    }, []);

    if (loading) {
        return <div className='px-32 ml-10 text-2xl font-semibold'>Loading jobs...</div>;
    }

    if (error) {
        return <div className='px-32 ml-10' style={{ color: 'red' }}>Error: {error}</div>;
    }

    if (jobdata.length === 0) {
        return <div className='px-32 ml-10'>No jobs found.</div>;
    }

    return (
        <>
            <div className='px-32 ml-10 grid gap-10 mb-20 grid-cols-3'>
                <JobCard date={jobdata[0].job_posted_at} jobTitle={jobdata[0].job_title} jobdescription={jobdata[0].job_description} jobPublisher={jobdata[0].job_publisher}/>
                <JobCard date={jobdata[1].job_posted_at} jobTitle={jobdata[1].job_title} jobdescription={jobdata[1].job_description} jobPublisher={jobdata[1].job_publisher}/>
                <JobCard date={jobdata[2].job_posted_at} jobTitle={jobdata[2].job_title} jobdescription={jobdata[2].job_description} jobPublisher={jobdata[2].job_publisher}/>
                <JobCard date={jobdata[3].job_posted_at} jobTitle={jobdata[3].job_title} jobdescription={jobdata[3].job_description} jobPublisher={jobdata[3].job_publisher}/>
                <JobCard date={jobdata[4].job_posted_at} jobTitle={jobdata[4].job_title} jobdescription={jobdata[4].job_description} jobPublisher={jobdata[4].job_publisher}/>
                <JobCard date={jobdata[5].job_posted_at} jobTitle={jobdata[5].job_title} jobdescription={jobdata[5].job_description} jobPublisher={jobdata[5].job_publisher}/>
                <JobCard date={jobdata[5].job_posted_at} jobTitle={jobdata[6].job_title} jobdescription={jobdata[6].job_description} jobPublisher={jobdata[6].job_publisher}/>
                <JobCard date={jobdata[5].job_posted_at} jobTitle={jobdata[7].job_title} jobdescription={jobdata[7].job_description} jobPublisher={jobdata[7].job_publisher}/>
                <JobCard date={jobdata[5].job_posted_at} jobTitle={jobdata[8].job_title} jobdescription={jobdata[8].job_description} jobPublisher={jobdata[8].job_publisher}/>
            </div>
        </>
    )
}

export default JobCardGrid