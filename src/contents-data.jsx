import ComponentLogicGates from "./Contents/Resources/logic-gates.jsx";
import OperatingSystems from "./Contents/Resources/operating-systems.jsx";


export const contents = [
    {
      unit: "A",
      unitName: "Concepts of Computer Science",
      chapters: [
        {
          chapter: "A1",
          chapterName: "Computer Fundamentals",
          topics: [
            {
              topic: "A1.1",
              topicName: "Computer hardware and operation",
              resources: []
            },
            {
              topic: "A1.2",
              topicName: "Data representation and computer logic",
              resources: [
                {
                  resourceName: "Logic Gates",
                  resourceType: "component",
                  resource: <ComponentLogicGates/>
                },
              ]
            },
            {
              topic: "A1.3",
              topicName: "Operating systems and control systems",
              resources: [
                {
                  resourceName: "Operating Systems",
                  resourceType: "component",
                  resource: <OperatingSystems/>
                }
              ]
            },
            {
              topic: "A1.4",
              topicName: "Translation (HL only)",
              resources: []
            }
          ]
        },
        {
          chapter: "A2",
          chapterName: "Networks",
          topics: [
            {
              topic: "A2.1",
              topicName: "Network fundamentals",
              resources: []
            },
            {
              topic: "A2.2",
              topicName: "Network architecture",
              resources: []
            },
            {
              topic: "A2.3",
              topicName: "Data transmissions",
              resources: []
            },
            {
              topic: "A2.4",
              topicName: "Network security",
              resources: []
            }
          ]
        },
        {
          chapter: "A3",
          chapterName: "Databases",
          topics: [
            {
              topic: "A3.1",
              topicName: "Database fundamentals",
              resources: []
            },
            {
              topic: "A3.2",
              topicName: "Database design",
              resources: []
            },
            {
              topic: "A3.3",
              topicName: "Database programming",
              resources: []
            },
            {
              topic: "A3.4",
              topicName: "Alternative databases and data warehouses (HL only)",
              resources: []
            }
          ]
        },
        {
          chapter: "A4",
          chapterName: "Machine Learning",
          topics: [
            {
              topic: "A4.1",
              topicName: "Machine learning fundamentals",
              resources: []
            },
            {
              topic: "A4.2",
              topicName: "Data preprocessing (HL only)",
              resources: []
            },
            {
              topic: "A4.3",
              topicName: "Machine learning approaches (HL only)",
              resources: []
            },
            {
              topic: "A4.4",
              topicName: "Ethical considerations",
              resources: []
            }
          ]
        }
      ]
    },
    {
      unit: "B",
      unitName: "Computational Thinking and Problem-Solving",
      chapters: [
        {
          chapter: "B1",
          chapterName: "Computational Thinking",
          topics: [
            {
              topic: "B1.1",
              topicName: "Approaches to computational thinking",
              resources: []
            }
          ]
        },
        {
          chapter: "B2",
          chapterName: "Programming",
          topics: [
            {
              topic: "B2.1",
              topicName: "Programming fundamentals",
              resources: []
            },
            {
              topic: "B2.2",
              topicName: "Data structures",
              resources: []
            },
            {
              topic: "B2.3",
              topicName: "Programming constructs",
              resources: []
            },
            {
              topic: "B2.4",
              topicName: "Programming algorithms",
              resources: []
            },
            {
              topic: "B2.5",
              topicName: "File processing",
              resources: []
            }
          ]
        },
        {
          chapter: "B3",
          chapterName: "Object-Oriented Programming (OOP)",
          topics: [
            {
              topic: "B3.1",
              topicName: "Fundamentals of OOP for a single class",
              resources: []
            },
            {
              topic: "B3.2",
              topicName: "Fundamentals of OOP for multiple classes (HL only)",
              resources: []
            }
          ]
        },
        {
          chapter: "B4",
          chapterName: "Abstract Data Types (ADTs) (HL only)",
          topics: [
            {
              topic: "B4.1",
              topicName: "Fundamentals of ADTs",
              resources: []
            }
          ]
        }
      ]
    }
  ]