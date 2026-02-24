let jobs = [
  {
    id: 1,
    company: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description:
      "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    status: "not-applied",
  },
  {
    id: 2,
    company: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description:
      "Create stunning web experiences for high-profile clients. Must have a portfolio and experience with modern web design trends.",
    status: "not-applied",
  },
  {
    id: 3,
    company: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    description:
      "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
    status: "not-applied",
  },
  {
    id: 4,
    company: "CloudSync Technologies",
    position: "Backend Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$140,000 - $185,000",
    description:
      "Design and implement scalable cloud infrastructure. Experience with AWS, Node.js, and distributed systems required.",
    status: "not-applied",
  },
  {
    id: 5,
    company: "GreenTech Innovations",
    position: "Full Stack Developer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description:
      "Join our mission to build sustainable technology. Work across the entire stack with React, Python, and PostgreSQL.",
    status: "not-applied",
  },
  {
    id: 6,
    company: "FinanceFlow",
    position: "Frontend Developer",
    location: "New York, NY",
    type: "Hybrid",
    salary: "$110,000 - $150,000",
    description:
      "Build intuitive financial dashboards used by thousands of investors. Strong CSS and JavaScript skills are a must.",
    status: "not-applied",
  },
  {
    id: 7,
    company: "HealthBridge AI",
    position: "Machine Learning Engineer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$160,000 - $210,000",
    description:
      "Develop AI models to improve patient outcomes in healthcare. Experience with TensorFlow, PyTorch, and clinical data preferred.",
    status: "not-applied",
  },
  {
    id: 8,
    company: "Edu Spark",
    position: "UI/UX Engineer",
    location: "Remote",
    type: "Contract",
    salary: "$90,000 - $130,000",
    description:
      "Design and implement engaging educational interfaces for K-12 students. Figma, React, and accessibility expertise essential.",
    status: "not-applied",
  },
];


let activeTab = "all";

const jobsList = document.getElementById("jobs-list");
const jobsCountEl = document.getElementById("jobs-count");
const statTotal = document.getElementById("stat-total");
const statInterview = document.getElementById("stat-interview");
const statRejected = document.getElementById("stat-rejected");


function badgeHTML(status) {
  if (status === "interview") {
    return `<span class="badge badge-sm font-semibold uppercase tracking-wide bg-green-100 text-green-700 border-0 py-3 px-3">Interview</span>`;
  }
  if (status === "rejected") {
    return `<span class="badge badge-sm font-semibold uppercase tracking-wide bg-red-100 text-red-700 border-0 py-3 px-3">Rejected</span>`;
  }
  return `<span class="badge badge-sm font-semibold uppercase tracking-wide bg-slate-100 text-slate-500 border-0 py-3 px-3">Not Applied</span>`;
}


/// Render job cards

function renderCard(job) {
  const iActive = job.status === "interview";
  const rActive = job.status === "rejected";

  return `
  <div class="job-card card bg-base-100 border border-slate-200 shadow-sm hover:shadow-md transition-shadow mb-4" data-id="${job.id}">
    <div class="card-body p-5 sm:p-6 gap-0">

      <!--company name + delete button -->
      <div class="flex items-start justify-between gap-3">
        <div>
          <h3 class="font-bold text-slate-800 text-base">${job.company}</h3>
          <p class="text-sm text-slate-500 mt-0.5">${job.position}</p>
        </div>
        <button
          class="btn btn-ghost btn-sm btn-square hover:bg-red-500 shrink-0"
          data-action="delete" data-id="${job.id}" title="Remove">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Pro v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2026 Fonticons, Inc.--><path d="M232.7 69.9C237.1 56.8 249.3 48 263.1 48L377 48C390.8 48 403 56.8 407.4 69.9L416 96L512 96C529.7 96 544 110.3 544 128C544 145.7 529.7 160 512 160L128 160C110.3 160 96 145.7 96 128C96 110.3 110.3 96 128 96L224 96L232.7 69.9zM128 208L512 208L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 208zM216 272C202.7 272 192 282.7 192 296L192 488C192 501.3 202.7 512 216 512C229.3 512 240 501.3 240 488L240 296C240 282.7 229.3 272 216 272zM320 272C306.7 272 296 282.7 296 296L296 488C296 501.3 306.7 512 320 512C333.3 512 344 501.3 344 488L344 296C344 282.7 333.3 272 320 272zM424 272C410.7 272 400 282.7 400 296L400 488C400 501.3 410.7 512 424 512C437.3 512 448 501.3 448 488L448 296C448 282.7 437.3 272 424 272z"/></svg>
        </button>
      </div>

      <!-- Job info -->
      <div class="flex flex-wrap text-xs text-slate-400 mt-2 gap-x-1">
        <span>${job.location}</span>
        <span>•</span>
        <span>${job.type}</span>
        <span>•</span>
        <span>${job.salary}</span>
      </div>

      <div class="mt-3">${badgeHTML(job.status)}</div>
      <p class="text-sm text-slate-500 leading-relaxed mt-3">${job.description}</p>

      <!-- Action buttons -->
      <div class="flex flex-wrap gap-2 mt-4">
        <button
          class="btn btn-sm rounded-lg ${iActive ? "btn-success text-white" : "btn-outline btn-success"}"
          data-action="interview" data-id="${job.id}">
          INTERVIEW
        </button>
        <button
          class="btn btn-sm rounded-lg ${rActive ? "btn-error text-white" : "btn-outline btn-error"}"
          data-action="rejected" data-id="${job.id}">
          REJECTED
        </button>
      </div>

    </div>
  </div>`;
}



/// no jobs display section


function emptyState() {
  return `
  <div class="card bg-base-100 border border-slate-200 shadow-sm">
    <div class="card-body items-center text-center py-20 gap-0">
      <img src="assets/jobs.png" alt="pdf logo" class="w-16 h-16 mb-4 rounded-2xl">
      <h3 class="font-bold text-slate-700 text-lg">No jobs available</h3>
      <p class="text-sm text-slate-400 mt-1">Check back soon for new job opportunities</p>
    </div>
  </div>`;
}