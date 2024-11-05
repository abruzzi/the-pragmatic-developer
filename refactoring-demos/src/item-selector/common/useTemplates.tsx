const templates = [
  // HR Templates
  {
    id: "HR1",
    name: "Onboarding Process Document",
    group: { name: 'HR' }
  },
  {
    id: "HR2",
    name: "Employee Evaluation Form",
    group: { name: 'HR' }
  },
  {
    id: "HR3",
    name: "Leave Request Template",
    group: { name: 'HR' }
  },

  // Business Templates
  {
    id: "B1",
    name: "Business Proposal Template",
    group: { name: 'Business' }
  },
  {
    id: "B2",
    name: "Market Analysis Report",
    group: { name: 'Business' }
  },
  {
    id: "B3",
    name: "Partnership Agreement",
    group: { name: 'Business' }
  },

  // Analysis Templates
  {
    id: "A1",
    name: "Data Analysis Report",
    group: { name: 'Analysis' }
  },
  {
    id: "A2",
    name: "Survey Analysis Template",
    group: { name: 'Analysis' }
  },
  {
    id: "A3",
    name: "Project Performance Review",
    group: { name: 'Analysis' }
  },
  {
    id: "A4",
    name: "Sales Data Analysis",
    group: { name: 'Analysis' }
  },

  // IT Templates
  {
    id: "IT1",
    name: "System Architecture Diagram",
    group: { name: 'IT' }
  },
  {
    id: "IT2",
    name: "Software Deployment Checklist",
    group: { name: 'IT' }
  },
];


const useTemplates = () => {
  return { templates };
};

export { useTemplates };
