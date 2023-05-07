// old javascript

const square1 = function(number) {
    return number * number;
}

// arrow functions

// sem parâmetro
const square2 = () => {
    return 2*2;
}

// se for só um parâmetro
const square3 = number => {
    return number * number;
}

// se tiver uma linha de código apenas
const square4 = number => number * number; 


const jobs = [
    {id: 1, isActive: true},
    {id: 2, isActive: true},
    {id: 3, isActive: false}
]

/** filter()
 * Returns the elements of an array that meet the condition specified in a callback function
 */
const activeJobs1 = jobs.filter(function (job) {return job.isActive; });
const activeJobs2 = jobs.filter(job =>  job.isActive);

console.log(activeJobs2);