const templates = [
  {
    id: "HR1",
    name: "Template 1 for HR project",
    group: {
      name: 'HR'
    }
  },
  {
    id: "HR2",
    name: "Template 2 for HR project",
    group: {
      name: 'HR'
    }
  },
  {
    id: "B1",
    name: "Template for Business project",
    group: {
      name: 'Business'
    }
  },
  {
    id: "A1",
    name: "Template 1 for Analysis project",
    group: {
      name: 'Analysis'
    }
  },
  {
    id: "A2",
    name: "Template 2 for Analysis project",
    group: {
      name: 'Analysis'
    }
  },
  {
    id: "A3",
    name: "Template 3 for Analysis project",
    group: {
      name: 'Analysis'
    }
  },
  {
    id: "IT1",
    name: "Template 1 for IT project",
    group: {
      name: 'IT'
    }
  },
  {
    id: "IT2",
    name: "Template 2 for IT project",
    group: {
      name: 'IT'
    }
  },
];

const useTemplates = () => {
  return { templates };
};

export { useTemplates };
