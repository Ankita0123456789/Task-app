export const statuses = [
    {
      id: 1,
      status: 'open',
      label: 'Open',
    },
    {
      id: 2,
      status: 'started',
      label: 'Started',
    },
    {
      id: 3,
      status: 'completed',
      label: 'Completed',
    },
  ];

  export const rooms = [
    {
      id: 1,
      name: 'Room-1',
      label: 'Mercury',
      bookings: ['20/06/2022'],
    },
    {
      id: 2,
      name: 'Room-2',
      label: 'Venus',
      bookings: ['20/06/2022'],
    },
    {
      id: 3,
      name: 'Room-3',
      label: 'Earth',
      bookings: ['20/06/2022'],
    },
    {
      id: 4,
      name: 'Room-4',
      label: 'Mars',
      bookings: ['20/06/2022'],
    },
    {
      id: 5,
      name: 'Room-5',
      label: 'Jupiter',
      bookings: ['20/06/2022'],
    },
  ];

export const tasks=[
    {
      id: 1,
      title: "Make list",
      description: "Make a list of all tasks",
      dueDate: "20/06/2022",
      status: "open",
    },
    {
        id: 2,
        title: "Meeting",
        description: "Schedule meetings",
        dueDate: "25/06/2022",
        status: "open",
      },
  ]
export const meetings=[
    {
      id: 1,
      title: "1st Meeting",
      description: "Get Together",
      dueDate: "29/06/2022",
      status: "Available",
      meetingRoom: "Room1",
    },
  ]
export const userObject = {
    user: {
      name: "Anwin",
      email: "anwin@gmail.com",
      password: "1234",
    },
    tasks: [
      {
        id: 1,
        title: "1st Task",
        description: "An amazing task",
        dueDate: "20/06/2022",
        status: "open",
      },
    ],
    meetings: [
      {
        id: 1,
        title: "1st Task",
        description: "An amazing task",
        dueDate: "20/06/2022",
        status: "open",
        meetingRoom: "Room1",
      },
    ],
  };
  