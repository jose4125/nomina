export default function () {
  return [
    {
      name: 'jose david',
      lastName: 'Lombana',
      email: 'jose4125@gmail.com',
      admin: true,
      workingDays: [
        {
          date: new Date(),
          amount: 0,
          avance: false,
          paid: false
        }
      ],
      job_id: 1
    },
    {
      name: 'diana',
      lastName: 'Lombana',
      email: 'diana@gmail.com',
      admin: true,
      workingDays: [
        {
          date: new Date(),
          amount: 10000,
          avance: true,
          paid: false
        }
      ],
      job_id: 1
    }
  ]
}
